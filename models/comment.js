'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({

  linkItem_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "LinkItem"
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
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

var Comment = mongoose.model("Comment", CommentSchema);

module.exports = {
  Comment: Comment
};