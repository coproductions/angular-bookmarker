var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({

  linkItem_id: {
    linkItem_id: mongoose.Schema.Types.ObjectId,
    index: true
  },
  user_id: {
    user_id: mongoose.Schema.Types.ObjectId,
    index: true
  },
  body: {
    type: String
  },
  created_at: {
    type: Date
  }
});

// CommentSchema.methods.getComments = function() {

// };

// CommentSchema.methods.getComment = function() {

// };

// CommentSchema.methods.addComment = function() {

// };

// CommentSchema.methods.updateComment = function() {

// };

// CommentSchema.methods.deleteComment = function() {

// };

// CommentSchema.methods.getLinkItem = function() {

// };

// CommentSchema.methods.getUser = function() {

// };

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = {
  Comment: Comment
}