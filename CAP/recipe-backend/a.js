// Start MongoDB Shell
mongo

// Create 'recipe' database
use recipe

// Create 'userdetails' collection
db.createCollection('userdetails')

// Define schema for 'userdetails' collection
db.userdetails.insert({
  username: "sampleuser",
  password: "samplepassword",
  fullname: "Sample User",
  profilepicture: BinData(0, "<Binary Image Data>"), // Replace <Binary Image Data> with actual binary image data
  createddate: new Date(),
  modifieddate: new Date(),
  deleteddate: null
})

// Create 'recipedetails' collection
db.createCollection('recipedetails')

// Define schema for 'recipedetails' collection
db.recipedetails.insert({
  title: "Sample Recipe",
  ingredients: "Ingredient 1, Ingredient 2",
  procedure: "Step 1, Step 2",
  userid: "<User ID>", // Replace <User ID> with the actual user ID
  createddate: new Date(),
  modifieddate: new Date(),
  deleteddate: null
})
