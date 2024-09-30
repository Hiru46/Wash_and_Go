// routes/driverRoutes.js
const express = require("express");
const router = express.Router();
const DriverController = require("../controllers/DriversController");

// Define routes and link to controller methods
router.get("/", DriverController.getAllDrivers); // Get all drivers
router.post("/", DriverController.insertDriverDetails); // Insert new driver details
router.get("/:id", DriverController.getDriverById); // Get driver by ID
// router.put("/:id", DriverController.updateDriver); // Update driver (commented out for now)
router.delete("/:id", DriverController.deleteDriver); // Delete driver by ID

module.exports = router;
