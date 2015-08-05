'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LinkItemSchema = new Schema({
  title: {
    type: String
  },
  url: {
    type: String,
    required: true
  },
  user_id: {

    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  rating: {
    type: Number
  },
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  },
  last_visited_at: {
    type: Date
  },
  visit_count: {
    type: Number
  },
  tags: [{ //check this for syntax and logic
    name: {
      type: String,
      index: true
    }
  }],
  private: {
    type: Boolean
  }
});

// LinkItemSchema.methods.getLinkItem = function() {

// };

// LinkItemSchema.methods.getComments = function() {

// };

// LinkItemSchema.methods.addLinkItem = function() {

// };

// LinkItemSchema.methods.updateLinkItem = function() {

// };

// LinkItemSchema.methods.deleteLinkItem = function() {

// };

var LinkItem = mongoose.model('LinkItem', LinkItemSchema);

module.exports = {
  LinkItem: LinkItem
};