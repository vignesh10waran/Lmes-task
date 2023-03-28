const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "comment",
  password: "vicky",
  port: 5432,
});

app.post("/api/comments", async (req, res) => {
  const { comment } = req.body;
  const query = {
    text: "INSERT INTO section (description) VALUES ($1)",
    values: [comment],
  };
  try {
    const result = await pool.query(query);
    res.status(200).send({ message: "Comment added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
