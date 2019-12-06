const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const db = {
	length: 0,
	item: ["h", "e", "l", "l", "o"]
};

app.get("/", (req, res) => {
	res.status(200).json(db);
});

app.get("/:id", (req, res) => {
	const id = req.params.id;

	res.status(200).json(db.item[id]);
});

app.post("/", (req, res) => {
	db.item.push(req.body.item);
	db.length = db.item.length;
	res.status(200).send("OK");
});

app.put("/:id", (req, res) => {
	const id = req.params.id;

	db.item.splice(id, 1, req.body.item);
	db.length = db.item.length;

	res.status(200).send("PUT OK");
});

app.delete("/:id", (req, res) => {
	const id = req.params.id;

	db.item.splice(id, 1);
	db.length = db.item.length;

	res.status(200).send("DELETE SUCCESS");
});

app.listen(3000, () => {
	console.log("Server is running!");
});
