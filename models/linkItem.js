var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LinkItemSchema = new Schema({
  title: {
    type: String
  },
  url: {
    type: String
  },
  user_id: {

    type: mongoose.Schema.Types.ObjectId,
    index: true;
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

LinkItemSchema.methods.getComments = function() {


};

var LinkItem = mongoose.model('LinkItem', LinkItemSchema);

module.exports = {
  LinkItem: LinkItem
}