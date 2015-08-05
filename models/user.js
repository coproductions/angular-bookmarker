'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({

  email: {
    type: String
  },
  password: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type:String
  }
});

UserSchema.methods.getLinkItems = function() {


};

// UserSchema.methods.getComments = function() {

// };

var User = mongoose.model('User', UserSchema);

module.exports = {
  User: User
};