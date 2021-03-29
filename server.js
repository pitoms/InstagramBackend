// const { pool: pool } = require("./connection.js");
const express = require("express");
const db = require("./db.js");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`));
app.use(express.json());

app.get("/", async(req, res) => {
  try {
    const data = await db.any("SELECT * FROM PHOTOS ORDER BY RANDOM() LIMIT 4");
    res.send(data);
  }
  catch(err){
    res.status(500).json(err);
  }
});

app.get("/:username", async(req, res) => {
  // res.send('Here is HTML of "usernames" profile.');
  try{
    const data = await db.any("SELECT * FROM " +
                              "(SELECT users.id AS user_id,users.name, " +
                               "photos.id AS photo_id, photos.src, photos.time_posted FROM PHOTOS " + 
                               "INNER JOIN USERS ON photos.user_id = users.id)"+
                               " AS res where name = ${username}",req.params);
    res.send(data)
  }
  catch(err){
    res.status(500).json(err);
  }
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
