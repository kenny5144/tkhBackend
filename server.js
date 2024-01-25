console.log("is this on");
const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const PORT = 3000;
require("dotenv").config({ path: ".env" });

// app.listen(PORT, function() {
// 	console.log(`Server is live! Listening at port ${PORT}`);
// 	// if this does not work, remember to save your file after each major change
// })
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
MongoClient.connect(process.env.MONGO_URL)
  .then((client) => {
    const db = client.db("practice");
    const usersCollection = db.collection("users");
    app.get("/", (req, res) => {
      usersCollection
        .find()
        .toArray()
        .then((results) => {
          res.render("index.ejs", { usersCollection: results });
        })
        .catch((error) => console.error(error));
    });
    app.post("/users", (req, res) => {
      
      usersCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/");
        })
        .catch((error) => console.log(error));
    });
    app.put("/users", (req, res) => {
    usersCollection
      .findOneAndUpdate(
        { username: req.body.username },
        {
          $set: {
            username: req.body.username,
            password: req.body.password,
          },
        },
        {
          upsert: false,
        },
        {
          returnNewDocument: true,
        }
      )
      .then((result) => {
        res.json("Success");
        return res;
      });
  })
  })
  .catch((error) => console.error(error));


// app.get('/', function (req, res){
// 	res.sendFile(__dirname + '/index.html');
// 	// if this does not work, remember to save your file after each major change
// })


app.listen(PORT, function () {
  console.log(`Server is live! Listening at port ${PORT}`);
});
