const express = require("express");
const router = express.Router();

const {
	getAllUser,
	getUserByName,
	addUser,
	updateUserByName,
	deleteUserByID,
} = require("../controller/userController");

router.get("/", getAllUser);
router.get("/:name", getUserByName);
router.post("/", addUser);
router.put("/:name", updateUserByName);
router.delete("/:id", deleteUserByID);

module.exports = router;
