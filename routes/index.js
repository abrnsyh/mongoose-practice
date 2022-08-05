const express = require("express");
const router = express.Router();

const UserRouter = require("./UserRouter");

router.get("/", (req, res) => {
	res.json("Aplikasi Mongoose Saya");
});

router.use("/user", UserRouter);

module.exports = router;
