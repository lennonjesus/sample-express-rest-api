var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({

  location: [{
    lat: String,
    lng: String,
  }],

  status: String,
  description: String,

  createdAt: Date,
  createdBy: String,

  updatedAt: Date,
  updatedBy: String

});

module.exports = mongoose.model('Todo', todoSchema)
