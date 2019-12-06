const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const mysql = require("mysql");

app.use(bodyParser.json());

const db = {
  length: 0,
  item: ["h", "e", "l", "l", "o"]
};

app.get("/", (req, res) => {
  const connection = mysql.createConnection({
    host: "likelion-practice.c57d2zirnw4n.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "mjulion2019",
    database: "lions"
  });

  connection.connect();

  connection.query("SELECT * FROM todos", function(error, results, fields) {
    if (error) {
      console.log(error);
      connection.end();
    }
    connection.end();
    res.status(200).json(results);
  });
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
