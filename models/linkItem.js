var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LinkItemSchema = new Schema({
  title: {
    type: String,
    index: true
  },
  url: {
    type: String,
    index: true
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
  tags: {
    type: [{
      name:String
    }]
  },
  private: {

    type: Boolean
  }
});

var LinkItem = mongoose.model('LinkItem', LinkItemSchema);

module.exports = {
  LinkItem: LinkItem
}