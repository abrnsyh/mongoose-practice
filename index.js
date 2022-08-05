const express = require("express");
const cors = require("cors");

const dbConnection = require("./config/dbConnection");
const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 8000;

dbConnection.then(() => console.log("Berhasil Connect")).catch((error) => console.log("error", error));

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
	console.log("Running on Port", PORT);
});
