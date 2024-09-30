const Driver = require("../models/Drivers");

// Get all drivers
const getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find({}, 'name PhoneNo RecoveryVehicleNo'); // Updated field names
    if (!drivers || drivers.length === 0) {
      return res.status(404).json({ message: "No Drivers found" });
    }
    return res.status(200).json({ drivers });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server Error" });
  }
};

// Get a driver by ID
const getDriverById = async (req, res) => {
  const id = req.params.id;

  try {
    const driver = await Driver.findById(id);
    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }
    return res.status(200).json({ driver });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

// Delete a driver by ID
const deleteDriver = async (req, res, next) => {
  const id = req.params.id;

  let deletedDriver;

  try {
    deletedDriver = await Driver.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error deleting driver" });
  }

  if (!deletedDriver) {
    return res.status(400).json({ message: "Unable to delete driver" });
  }

  return res.status(200).json({ message: "Driver deleted successfully" });
};

// Insert driver details
const insertDriverDetails = async (req, res, next) => {
  const {
    id,
    name,
    States,
    RecoveryVehicleNo,
    Address,
    PhoneNo,
  } = req.body;

  let newDriver;

  try {
    newDriver = new Driver({
      id,
      name,
      States,
      RecoveryVehicleNo,
      Address,
      PhoneNo,
    });
    await newDriver.save(); // Save the document to the database
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ message: "Server error, could not save driver details" });
  }

  if (!newDriver) {
    return res.status(404).send({ message: "Unable to add driver details" });
  }

  return res.status(200).json({ newDriver });
};

exports.insertDriverDetails = insertDriverDetails;
exports.getAllDrivers = getAllDrivers;
exports.getDriverById = getDriverById;
exports.deleteDriver = deleteDriver;
