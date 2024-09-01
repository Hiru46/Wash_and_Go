const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

// Define route and link to controller method
router.get("/", UserController.getAllUsers);

router.post("/", UserController.addUsers);

router.get("/:id", UserController.getById);

router.put("/:id", UserController.UpdateUser);

router.delete("/:id", UserController.DeleteUser);




// Export the router
module.exports = router;
