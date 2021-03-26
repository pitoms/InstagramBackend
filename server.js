// const { pool: pool } = require("./connection.js");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`));
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.body);
  res.send(`${req.body}Here are all fetched images in chronological order`);
});

app.get("/:username", (req, res) => {
  res.send('Here is HTML of "usernames" profile.');
});

app.post("/createUser", (req, res) => {
  res.send(`${req.body.username} created.`);
});

app.post("/addPhoto", (req, res) => {
  res.send("Photo added to logged in users photos.");
});

app.post("/deletePhoto/:photoid", (req, res) => {
  res.send("Deleted photo from logged in user.");
});
