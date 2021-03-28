// const { pool: pool } = require("./connection.js");
const express = require("express");
const db = require("./db.js")
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

app.post("/createUser", async (req, res) => {
  // res.send(`${req.body.username} created.`);
  try{
    await db.none("INSERT INTO users (name, email, pswd_hash) VALUES (${username},${email}, ${password})", req.body)
    return res.json({
      message: 'success'
    })
  }
  catch(err){
    console.log(err);
    res.status(500).json(err)
  }
});
//Delete user from users table
app.delete("/deleteUser", async (req,res) => {
  try{
      await db.none('DELETE FROM users WHERE id = ${id}', req.body)
      return res.json({
        message: 'User Deleted'
      })
  }
  catch(err){
    console.log(err);
    res.status(500).json(err)
  }
});


app.post("/addPhoto", (req, res) => {
  res.send("Photo added to logged in users photos.");
});

app.post("/deletePhoto/:photoid", (req, res) => {
  res.send("Deleted photo from logged in user.");
});


