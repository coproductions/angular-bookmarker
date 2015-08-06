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
  firstName: {

    type: String
  },
  lastName: {

    type: String
  },
  body: {
    type: String
  },
  created_at: {
    type: Date
  }
});

CommentSchema.statics.findSorted = function(field, order, callback) {

  var sortString = field;

  if(order === "asc") {

    sortString = "+" + sortString;

  } else if(order === "dsc") {

    sortString = "-" + sortString;

  } else {

    throw new Error("Valid sort orders are 'asc' and 'dsc'");
  }

  return Comment.find().sort(sortString).exec(callback);
};

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