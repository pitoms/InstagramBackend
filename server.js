const { pool: pool } = require("./connection.js");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`));

app.get("/", (req, res) => {
  res.send("Here are all fetched images in chronological order");
});

app.post("/createUser", (req, res) => {
  res.send("User created with req body data.");
});

app.post("/addPhoto", (req, res) => {
  res.send("Photo added to logged in users photos.");
});

app.get("/:username", (req, res) => {
  res.send('Here is HTML of "usernames" profile.');
});

app.post("/deletePhoto/:photoid", (req, res) => {
  res.send("Deleted photo from logged in user.");
});
