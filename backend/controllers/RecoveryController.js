const Recovery = require("../models/Recovery");
const Form = require("../models/Recovery");

const getAllrecovery = async (req, res) => {
  try {
    const recovery = await Recovery.find({}, 'Name EmailAddress VehicleRegistrationNumber');
    if (!recovery || recovery.length === 0) {
      return res.status(404).json({ message: "No Recovery found" });
    }
    return res.status(200).json({ recovery });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server Error" });
  }
};

const getrecoveryId = async (req, res) => {
  const id = req.params.id;

  try {
    const getrecovery = await Recovery.findById(id);
    if (!getrecovery) {
      return res.status(404).json({ message: "Recovery request not found" });
    }
    return res.status(200).json({ getrecovery });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};


const DeleteRecovery = async (req, res, next) => {
  const id = req.params.id;

  let deleterecovery;

  try {
    deleterecovery = await Recovery.findByIdAndDelete(id); // Assuming the same model
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error deleting recovery request" });
  }

  if (!deleterecovery) {
    return res.status(400).json({ message: "Unable to delete recovery request" });
  }

  return res.status(200).json({ message: "Recovery request deleted successfully" });
};





const InsertRecoveryDetails = async (req, res, next) => {
  const {
    Name,
    EmailAddress,
    Address,
    ContactNo,
    DestinationLocation,
    VehicleType,
    PickUpLocation,
    NICNumber,
    VehicleRegistrationNumber,
    Description,
  } = req.body;

  let Forms;

  try {
    Forms = new Form({
      Name,
      EmailAddress,
      Address,
      ContactNo,
      DestinationLocation,
      VehicleType,
      PickUpLocation,
      NICNumber,
      VehicleRegistrationNumber,
      Description,
    });
    await Forms.save(); // Save the document to the database
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ message: "Server error, could not save form" });
  }

  if (!Forms) {
    return res.status(404).send({ message: "Unable to add users" });
  }

  return res.status(200).json({ Forms });
};

exports.InsertRecoveryDetails = InsertRecoveryDetails;
exports.getAllrecovery = getAllrecovery;
exports.getrecoveryId = getrecoveryId;
exports.DeleteRecovery = DeleteRecovery;
