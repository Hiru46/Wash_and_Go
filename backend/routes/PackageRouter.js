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

PackageRouter.put('/:id', async (req, res) => {
    try {
      const updatedPackage = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedPackage);
    } catch (error) {
      res.status(400).json({ message: 'Error updating package', error });
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
