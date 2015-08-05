var express = require('express');
var app = express();
var mongoose = require('mongoose');
var routes = require('./routes/routes.js');
// var db = require('../models');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/angular-bookmarker');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
  console.log('Mongo connection success!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./public'));

// console.log(routes);

app.use('/api', routes);

// app.use(function(req,res,next) {

//   console.log(req.url);
//   next();
// });

// app.get('*', function(req,res){
//   res.sendFile('./public/index.html',
//               {
//               root: __dirname
//               })
// })

app.listen(3000);