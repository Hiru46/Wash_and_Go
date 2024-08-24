const mongoose = require("mongoose")

mongoose.connect(
    "mongodb+srv://5gang:ocjaIzGYFjpYlih2@cluster0.zk7k9.mongodb.net/Wash_and_GO"
)

    .then(
        () => {
            console.log("Connected to the Database")
        }

    ).catch(
        () => {
            console.log("failed")
        }
    )

const express = require("express");

const app = express()
const PORT = 5000;
app.use(express.json());

const PackageRouter = require("./routes/PackageRouter.js");

app.listen(PORT, ()=>{
    console.log(`The app is running on http://localhost:${PORT}`);}
)

app.get(
    "/",
    (req, res) => {
        res.status(200).send("Welcome to Home Page");
    }
)


// Routers

app.use("/package", PackageRouter);