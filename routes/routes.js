var express = require('express');
var router = express.Router();
// var app = express();
// var bodyParser = require('body-parser');
var LinkItem = require('../models/linkItem').LinkItem;
var Comment = require('../models/comment').Comment;
var User = require('../models/user').User;

// router.use(function(req,res,next) {

//   console.log(req.url);
//   next();
// })

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

router.get('/linkItems', function(req,res) {

  LinkItem.find(function(error, items) {

    if(error) {

      throw error;

    } else {

      res.json(items);
    }
  });
});

router.get('/linkItems/:id', function(req,res) {

  LinkItem.findOne(
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

  var title = req.body.title;
  var url = req.body.url;
  var user_id = req.body.user_id;
  var rating = req.body.rating;
  var created_at = Date.now();
  var updated_at = null;
  var last_visited_at = Date.now();
  var visit_count = 1;
  var tags = req.body.tags;
  var private = req.body.private;

  var linkItem = {

    title: title,
    url: url,
    user_id: user_id,
    rating: rating,
    created_at: created_at,
    updated_at: updated_at,
    last_visited_at: last_visited_at,
    visit_count: visit_count,
    tags: tags,
    private: private
  };

  var newLinkItem = new LinkItem(linkItem);
  newLinkItem.save(function(error) {

    if(error) {

      throw error;

    } else {

      res.send(true);
    }
  });

  // var newItem = new LinkItem(req.body.linkItem);
  // newItem.save(function(error) {

  //   if(error) {

  //     throw error;

  //   } else {

  //     res.send(true);
  //   }
  // });
});

router.put('/linkItems/:id', function(req,res) {

  var newItem = new LinkItem(req.body.linkItem);
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

  Comment.find(function(error, comments) {

    if(error) {

      throw error;

    } else {

      res.json(comments);
    }
  });
});

router.get('/comments/:id', function(req,res) {

  Comment.findOne(
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

  var linkItem_id = req.body.linkItem_id;
  var user_id = req.body.user_id;
  var body = req.body.body;
  var created_at = Date.now();

  var comment = {
    linkItem_id: linkItem_id,
    user_id: user_id,
    body: body,
    created_at: created_at
  };

  var newComment = new Comment(comment);
  newComment.save(function(error) {

    if(error) {

      throw error;

    } else {

      res.send(true);
    }
  });
});

router.put('/comments/:id', function(req,res) {

  var newComment = new Comment(req.body.comment);
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

router.get('/users', function(req,res) {

  User.find(function(error, users) {

    if(error) {

      throw error;

    } else {

      res.json(users);
    }
  });
});

router.get('/users/:id', function(req,res) {

  User.findOne(
    {
      _id: req.params.id
    },

    function(error, user) {

      if(error) {

        throw error;

      } else {

        res.json(user);
      }
    }
  );
});

router.post('/users', function(req,res) {

  var email = req.body.email;
  var password = req.body.password;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;

  var user = {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName
  };

  var newUser = new User(user);
  newUser.save(function(error) {

    if(error) {

      throw error;

    } else {

      res.send(true);
    }
  });
});

router.put('/users/:id', function(req,res) {

  var newUser = new User(req.body.user);
  newUser.save(function(error) {

    if(error) {

      throw error;

    } else {

      res.send(true);
    }
  });
});

router.delete('/users/:id', function(req,res) {

  var user = findOne({

    _id: req.params.id
  });

  if(user) {

    user.remove(function(error) {

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

module.exports = router;