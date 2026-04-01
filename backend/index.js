const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Import routes
const AdminCustomersManage = require("./routes/UserRouter");

// Middleware
app.use(express.json());
app.use(cors());
app.use("/AdminCustomers", AdminCustomersManage);

const { createMockModel } = require("./devDatabase");
let useDevDB = false;





// MongoDB connection with fallback to dev database
const connectDatabase = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI ||
            "mongodb+srv://5gang:ocjaIzGYFjpYlih2@cluster0.zk7k9.mongodb.net/Wash_and_GO"
        );
        console.log("✓ Connected to MongoDB Atlas");
    } catch (err) {
        console.warn("✗ MongoDB connection failed. Switching to development file-based database...");
        console.warn("  Error:", err.message);
        useDevDB = true;
        console.log("✓ Using dev database (JSON file storage)");
    }
    
    // Start server regardless of DB connection
    app.listen(5000, () => {
        console.log("Server is running on port 5000");
    });
};

connectDatabase();

// Model selection will be done after connectDatabase attempt
let User, Admin;

setImmediate(async () => {
    require("./models/Register");
    const RealUser = mongoose.model("Register");
    const MockUser = createMockModel("Register");
    User = useDevDB ? MockUser : RealUser;
    
    require("./models/Admin");
    const RealAdmin = mongoose.model("Admin");
    const MockAdmin = createMockModel("Admin");
    Admin = useDevDB ? MockAdmin : RealAdmin;
});



app.post("/register", async (req, res) => {

    const { FirstName, LastName, Address, MobileNumber, NIC, Email, Password } = req.body;

    try {
        // Check if a user with the same email already exists
        const existingUser = await User.findOne({ Email });
        console.log(existingUser)
        if (existingUser) {
            return res.send({ status: "error", message: "Email already registered" });
        }

        // Create a new user if the email is not taken
        await User.create({
            FirstName,
            LastName,
            Address,
            MobileNumber,
            NIC,
            Email,
            Password // In a real application, you should hash the password before saving
        });

        res.send({ status: "ok" });
    } catch (err) {
        console.error(err); // Log error for debugging
        res.send({ status: "error", message: "An error occurred while registering. Please try again." });
    }
});



// Login route





app.post("/login", async (req, res) => {
    const { email, password } = req.body;


    try {
        // Check in User table
        let user = await User.findOne({ Email: email });
        console.log(user)

        // Check in Admin table if not found in User table
        if (!user) {
            user = await Admin.findOne({ email });


        }

        if (!user) {
            return res.json({ error: "User Not Found" });
        }
        console.log(user.Password)
        // Check if the password matches (no hashing, plain text comparison)
        if (user.Password === password) {
            // Determine user role based on model

            const role = user instanceof Admin ? 'admin' : 'customer';

            return res.send({
                status: "ok",

                role: role,
                redirect: role === 'admin' ? "/admin-dashboard" : "/customer-dashboard"
            });
        } else {
            return res.json({ status: "Incorrect Password" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});
