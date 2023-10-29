const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/recipeDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: " + err);
  });

const userSchema = new mongoose.Schema({
  userid: String,
  username: String,
  userpassword: String,
  fullname: String,
  profilepicture: String,
  createddate: Date,
  modifieddate: Date,
  deleteddate: Date,
});

const recipeSchema = new mongoose.Schema({
  recipeid: String,
  title: String,
  userid: String,
  recipeimage: String,
  recipedescription: String,
  createddate: Date,
  modifieddate: Date,
  deleteddate: Date,
});

const UserModel = mongoose.model("userdetails", userSchema);
const RecipeModel = mongoose.model("recipedetails", recipeSchema);

// Endpoint 1: User Login
app.post("/login", async (req, res) => {
  const { username, userpassword } = req.body;
  try {
    const user = await UserModel.findOne({ username });
    if (user && bcrypt.compareSync(userpassword, user.userpassword)) {
      res.status(200).json({
        success: true,
        userid: user.userid,
        userfullname: user.fullname,
        userprofilepicture: user.profilepicture,
      });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Endpoint 2: User Signup
app.post("/signup", async (req, res) => {
  const { username, userpassword } = req.body;
  try {
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "Username already exists" });
    }

    const newUser = new UserModel({
      userid: uuidv4(),
      username,
      userpassword: bcrypt.hashSync(userpassword, 10),
      createddate: new Date(),
      modifieddate: new Date(),
    });
    const savedUser = await newUser.save();
    res.status(201).json({
      success: true,
      userid: savedUser.userid,
      userfullname: savedUser.fullname,
      userprofilepicture: savedUser.profilepicture,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Endpoint 3: Create Recipe
app.post("/recipes/create", async (req, res) => {
  const { userid, title, recipeimage, recipedescription } = req.body;
  try {
    const existingRecipe = await RecipeModel.findOne({ title, userid });
    if (existingRecipe) {
      return res.status(409).json({ success: false, message: "Recipe with the same title already exists" });
    }

    const newRecipe = new RecipeModel({
      recipeid: uuidv4(),
      title,
      userid,
      recipeimage,
      recipedescription,
      createddate: new Date(),
      modifieddate: new Date(),
    });
    await newRecipe.save();
    res.status(201).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Implement the rest of the endpoints as per your requirements

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
