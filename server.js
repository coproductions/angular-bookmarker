'use strict';

//partial implementation of auth from https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var routes = require('./routes/routes.js');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost/angular-bookmarker');

app.use(express.static('./public'));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
  console.log('Mongo connection success!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./public'));

app.use('/api', expressJwt({secret:'test'}));
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