const { UserModel } = require("../models");

module.exports = {
	getAllUser: async (req, res) => {
		const users = await UserModel.find({});
		console.log(users);

		try {
			res.json({
				message: "Berhasil ambil data user",
				data: users,
			});
		} catch (err) {
			console.log(err);
			res.status(500);
		}
	},
	getUserByName: async (req, res) => {
		const { name } = req.params;
		const user = await UserModel.findOne({ name: name });
		res.json({
			message: "Succsess get user data",
			data: user,
		});
	},
	addUser: async (req, res) => {
		const data = req.body;
		user = new UserModel(data);
		user.save((err) => {
			if (err) {
				res.json("error");
			}
			res.json("Success adding new user");
		});
	},
	updateUserByName: async (req, res) => {},
	deleteUserByID: async (req, res) => {},
};
