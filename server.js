var express = require('express');
<<<<<<< HEAD
// var session = require('express-session');
var app = express();
// var method_override = require('method-override');
// var bodyParser = require('body-parser');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var mongoose = require('mongoose');
// var db = require('../models');

// function ensureAuthenticated(req, res, next) {

//   if (req.isAuthenticated()) { return next(); }
//   res.redirect('/login')
// }

// app.use(session(
//   {
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true
//   }
// ));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(

//   function(username, password, done) {

//     db.user.findOne({ where: {username: username} }

//     ).then(function(user) {

//       if (!user) {

//         return done(null, false, { message: 'Unknown username.' });
//       }

//       var match = false;

//       if(getHash(password) === user.password) {

//         match = true;
//       }

//       if (!match) {

//         return done(null, false, { message: 'Incorrect password.' });
//       }

//       return done(null, user);
//     });
//   }
// ));

// app.use(function(req,res,next) {

//   app.locals.user = req.user;

//   next();
// });
=======
var app = express();
var mongoose = require('mongoose');
var routes = require('./routes/routes.js');
// var db = require('../models');
var bodyParser = require('body-parser');
>>>>>>> database_setup

// mongoose.connect('mongodb://localhost/angular-bookmarker');

<<<<<<< HEAD
app.use(express.static('./public'));

// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login'})
// );

// app.get('/logout', function(req, res){

//   req.logout();
//   res.redirect('/');
// });

// app.post('/createUser', function(req, res) {

//   db.user.findAll({

//     where: {

//       username: req.params.username
//     }
//   }).then(function(user) {

//     if(user.length < 1) {

//       var hashed_password = getHash(req.body.password);

//       db.user.create({

//         username: req.body.username,
//         password: hashed_password

//       }).then(function() {

//         db.image.findAll()
//           .then(function(images) {

//             res.render("index", {

//               images: images
//             }
//           );
//         });
//       });

//     } else {

//       res.send('Username is already taken.')
//     }
//   });
// });

// app.get('/linkItems', function(req,res) {

// });

// app.get('/linkItems/:linkItem_id', function(req,res) {

// });

// app.get('/comments', function(req,res) {

// });

// // app.get('/comments/:linkItem_id', function(req,res) {

// // });

// // app.get('/comments/:user_id', function(req,res) {

// // });

// app.post('/linkItems', function(req,res) {

// });

// app.post('/comments', function(req,res) {

// });

// app.put('/linkItems/:linkItem_id', function(res,req) {

// });

// app.put('/comments/:comment_id' function(res,req) {

// });

// app.delete('linkItems/:linkItem_id', function(res,req) {

// });

// app.delete('comments/:comment_id', function(res,req) {

// });

=======
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

>>>>>>> database_setup
// app.get('*', function(req,res){
//   res.sendFile('./public/index.html',
//               {
//               root: __dirname
//               })
// })

app.listen(3000);