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

LinkItemSchema.statics.findSorted = function(field, order, callback) {

  var sortString = field;

  if(order === "asc") {

    sortString = "+" + sortString;

  } else if(order === "dsc") {

    sortString = "-" + sortString;

  } else {

    throw new Error("Valid sort orders are 'asc' and 'dsc'");
  }

  return LinkItem.find().sort(sortString).exec(callback);
};

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