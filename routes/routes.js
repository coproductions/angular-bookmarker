module.exports = routes;

function routes() {

  var express = require('express');
  var router = express.Router();
  var db = require('../models');

  router.get('/linkItems', function(req,res) {

    db.LinkItem.find(function(error, items) {

      if(error) {

        throw error;

      } else {

        res.json(items);
      }
    });
  });

  router.get('/linkItems/:id', function(req,res) {

    db.LinkItem.findOne(
      {
        _id: req.params.id
      },

      function(error, item) {

        if(error) {

          throw error;

        } else {

          res.json(item);
        }
      }
    );
  });

  router.post('/linkItems', function(req,res) {

    var newItem = new db.LinkItem(req.body.linkItem);
    newItem.save(function(error) {

      if(error) {

        throw error;

      } else {

        res.send(true);
      }
    });
  });

  router.put('/linkItems/:id', function(req,res) {

    var newItem = new db.LinkItem(req.body.linkItem);
    newItem.save(function(error) {

      if(error) {

        throw error;

      } else {

        res.send(true);
      }
    });
  });

  router.delete('/linkItems/:id', function(req,res) {

    var item = findOne({

      _id: req.params.id
    });

    if(item) {

      item.remove(function(error) {

        if(error) {

          throw error;

        } else {

          res.send(true);
        }
      });
    } else {

      res.send(false);
    }
  });

  router.get('/comments', function(req,res) {

    db.Comment.find(function(error, comments) {

      if(error) {

        throw error;

      } else {

        res.json(comments);
      }
    });

  });

  router.get('/comments/:id', function(req,res) {

    db.Comment.findOne(
      {
        _id: req.params.id
      },

      function(error, comment) {

        if(error) {

          throw error;

        } else {

          res.json(comment);
        }
      }
    );
  });

  router.post('/comments', function(req,res) {

    var newComment = new db.Comment(req.body.comment);
    newComment.save(function(error) {

      if(error) {

        throw error;

      } else {

        res.send(true);
      }
    });
  });

  router.put('/comments/:id', function(req,res) {

    var newComment = new db.Comment(req.body.comment);
    newComment.save(function(error) {

      if(error) {

        throw error;

      } else {

        res.send(true);
      }
    });
  });

  router.delete('/comments/:id', function(req,res) {

    var comment = findOne({

      _id: req.params.id
    });

    if(comment) {

      comment.remove(function(error) {

        if(error) {

          throw error;

        } else {

          res.send(true);
        }
      });

    } else {

      res.send(false);
    }
  });
};