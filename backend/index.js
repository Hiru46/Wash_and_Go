const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();

// Import routes
const AdminCustomersManage = require("./routes/UserRouter");
const OfferRouter = require('./routes/OfferRouter');
const ReferralRouter = require('./routes/ReferralRoute');


// Middleware
app.use(express.json());
app.use(cors());
app.use("/AdminCustomers", AdminCustomersManage);
app.use('/offers', OfferRouter);
app.use('/referrals', ReferralRouter); // Add this line to use the ReferralRouter


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
mongoose
    .connect(
        process.env.MONGO_URI ||
        "mongodb+srv://5gang:ocjaIzGYFjpYlih2@cluster0.zk7k9.mongodb.net/Wash_and_GO"
    )
    .then(() => console.log("Connected to MongoDB"))
    .then(() => {
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch((err) => console.log(err));





require("./models/Register");
const User = mongoose.model("Register");

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


require("./models/Admin");
const Admin = mongoose.model("Admin")



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
