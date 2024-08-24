const express = require("express");
const PackageController = require("../controllers/PackageController");
const PackageRouter = express.Router();

PackageRouter.get("/:id?", async (req, res) => {
    try {
        const data = await new PackageController().get(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

PackageRouter.post("/store", async (req, res) => {
    try {
        const data = await new PackageController().store(req.body);
        res.json({ message: data });
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

module.exports = PackageRouter;
