
let mongoose = require('mongoose');

let Schema = mongoose.Schema; // Save a Reference to the Schema Constructor

let commentSchema = new Schema({
  
  // Body for the comment will be string
  body: String

});

// This creates our model from the above schema, using mongoose's model method
let Comment = mongoose.model("Comment", commentSchema);

// Export the Comment model
module.exports = Comment;
