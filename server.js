// const { pool: pool } = require("./connection.js");
const express = require("express");
const db = require("./db.js");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`));
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.body);
  res.send(`${req.body}Here are all fetched images in chronological order`);
});

// assumes a way to access user row with name

app.get("/:username", (req, res) => {
  try {
    await db.none("SELECT * FROM photos WHERE user_id = ${username} LIMIT 10", req.params);
    return res.json({
      message: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  res.send('Here is HTML of "usernames" profile.');
});

app.put("/createUser", async (req, res) => {
  // res.send(`${req.body.username} created.`);
  try {
    await db.none("INSERT INTO users (name, email, pswd_hash) VALUES (${name},${email}, ${pswd_hash})", req.body);
    return res.json({
      message: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Delete user from users table
app.delete("/deleteUser", async (req, res) => {
  try {
    await db.none("DELETE FROM users WHERE id = ${id}", req.body);
    return res.json({
      message: "User Deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.put("/addPhoto", async (req, res) => {
  try {
    await db.none("INSERT INTO photos (user_id, src) VALUES (${user_id},${src})", req.body);
    return res.json({
      message: "success",
    });

    //should add robust validation
  } catch (err) {
    console.log(err);
    // res.status(500).json(err);
  }

  res.send("Photo added to logged in users photos.");
});

app.post("/deletePhoto/:photoid", (req, res) => {
  res.send("Deleted photo from logged in user.");
});
