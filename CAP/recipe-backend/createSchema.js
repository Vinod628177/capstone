const mongoose = require('mongoose');

// Define the MongoDB connection for creating the schemas
mongoose.connect('mongodb://localhost/recipe', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Create a Mongoose schema for userdetails
const userSchema = new mongoose.Schema({
  userid: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  userpassword: { type: String, required: true },
  fullname: { type: String },
  profilepicture: { type: String },
  createddate: { type: Date, default: Date.now },
  modifieddate: { type: Date },
  deleteddate: { type: Date },
});

// Create a Mongoose schema for recipedetails
const recipeSchema = new mongoose.Schema({
  recipeid: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  userid: { type: Number, required: true },
  recipeimage: { type: Buffer }, // Store images as binary data
  recipedescription: { type: String },
  createddate: { type: Date, default: Date.now },
  modifieddate: { type: Date },
  deleteddate: { type: Date },
});

// Create Mongoose models for userdetails and recipedetails
const User = mongoose.model('User', userSchema);
const Recipe = mongoose.model('Recipe', recipeSchema);

// Close the MongoDB connection after creating schemas
db.close();

console.log('Schemas created successfully.');
