const { pool: pool } = require("./connection.js");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`));

app.get("/", (req, res) => {
  res.sendFile("devLogin.html");
  console.log("main page hit");
});
