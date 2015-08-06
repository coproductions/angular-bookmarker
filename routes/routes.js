'use strict';

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

      console.log(error);
      res.send(500,error);

    } else {

      res.json(items);
    }
  });
});

router.get('/linkItems/:id/comments', function(req,res) {

  LinkItem.findOne(
    {
      _id: req.params.id
    },

    function(error, item) {

      if(error) {

        console.log(error);
        res.send(500,error);

      } else if(item) {

        Comment.find({linkItem_id: item._id}).sort('-created_at').exec(function(error,items) {

          if(error) {

            console.log(error);
            res.send(500,error);

          } else {

            res.json(items);
          }
        });

      } else {

        res.send(400,"No document was found for the given id.");
      }
    }
  );
})

router.get('/linkItems/:field/:order', function(req,res) {

  LinkItem.findSorted(req.params.field, req.params.order, function(error, items) {

    if(error) {

      console.log(error);
      res.send(500,error);

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

        console.log(error);
        res.send(500,error);

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
  var privateFlag = req.body.private;

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
    private: privateFlag
  };

  var newLinkItem = new LinkItem(linkItem);
  newLinkItem.save(function(error, linkItem) {
    if(error) {

      console.log(error);
      res.send(500,error);

    } else {
      res.json(linkItem);
    }
  });
});

router.put('/linkItems/:id', function(req,res) {

  var updatedLinkItem = {};

  if(req.body.title) {

    updatedLinkItem.title = req.body.title;
  }

  if(req.body.url) {

    updatedLinkItem.url = req.body.url;
  }

  if(req.body.rating) {

    updatedLinkItem.rating = req.body.rating;
  }

  updatedLinkItem.updated_at = Date.now();

  if(req.body.last_visited_at) {

    updatedLinkItem.last_visited_at = req.body.last_visited_at;
  }

  if(req.body.visit_count) {

    updatedLinkItem.visit_count = req.body.visit_count;
  }

  // if(req.body.tags) {

  //   updatedLinkItem.tags = req.body.tags;
  // }

  if(req.body.private) {

    updatedLinkItem.private = req.body.private;
  }

  // if(req.body.body) {

  //   updatedLinkItem.body = req.body.body;
  // }

  LinkItem.findByIdAndUpdate(req.params.id, {

    $set: updatedLinkItem
    },
    function(error, linkItem) {

      if(error) {

        console.log(error);
        res.send(500,error);
        return;

      } else if(req.body.tags) {

        // console.log(JSON.parse(req.body.tags));

        var tagPushes = JSON.parse(req.body.tags);

        console.log(typeof tagPushes);

        LinkItem.findByIdAndUpdate(req.params.id, {

          $pushAll: tagPushes

        },
        function(error, linkItems) {

          if(error) {

            console.log(error);
            res.send(500, error);
            return;

          } else {

            res.send(linkItems);
            return;
          }
        });

      } else if(linkItem) {

        res.send(linkItem);
        return;
      }
    }
  );

  // var newLinkItem = new LinkItem(req.body.linkItem);
  // newLinkItem.save(function(error, linkItem) {

  //   if(error) {

  //     console.log(error);
  //     res.send(500,error);

  //   } else {

  //     res.json(linkItem);
  //   }
  // });
});

router.delete('/linkItems/:id', function(req,res) {

  LinkItem.findByIdAndRemove(req.params.id, function(error) {

    if(error) {

      console.log(error);
      res.send(500,error);

    } else {

      res.send(true);
    }
  });
});

router.get('/comments', function(req,res) {

  Comment.find(function(error, comments) {

    if(error) {

      console.log(error);
      res.send(500,error);

    } else {

      res.json(comments);
    }
  });
});

router.get('/comments/:field/:order', function(req,res) {

  Comment.findSorted(req.params.field, req.params.order, function(error, items) {

    if(error) {

      console.log(error);
      res.send(500,error);

    } else {

      res.json(items);
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

        console.log(error);
        res.send(500,error);

      } else {

        res.json(comment);
      }
    }
  );
});

router.post('/comments', function(req,res) {

  var getUser = function(error, user) {

    if(error) {

      console.log(error);
      res.send(500,error);

    } else {

      var firstName = user.firstName;
      var lastName = user.lastName;

      var comment = {

        linkItem_id: linkItem_id,
        user_id: user_id,
        body: body,
        created_at: created_at,
        firstName: firstName,
        lastName: lastName
      };

      var newComment = new Comment(comment);
      newComment.save(function(error, comment) {

        if(error) {

          console.log(error);
          res.send(500,error);

        } else {

          res.json(comment);
        }
      });
    }
  };

  var linkItem_id = req.body.linkItem_id;
  var user_id = req.body.user_id;
  var body = req.body.body;
  var created_at = Date.now();

  User.findOne({

      _id: user_id
    },
    getUser
  );
});

router.put('/comments/:id', function(req,res) {

  var updatedComment = {};

  if(req.body.body) {

    updatedComment.body = req.body.body;
  }

  if(req.body.firstName) {

    updatedComment.firstName = req.body.firstName;
  }

  if(req.body.lastName) {

    updatedComment.lastName = req.body.lastName;
  }

  Comment.findByIdAndUpdate(req.params.id, {

    $set: updatedComment
    },
    function(error, comment) {

      if(error) {

        console.log(error);
        res.send(500,error);
      }

      res.send(comment);
    }
  );

  var newComment = new Comment(req.body.comment);
  newComment.save(function(error, comment) {

    if(error) {

      console.log(error);
      res.send(500,error);

    } else {

      res.json(comment);
    }
  });
});

router.delete('/comments/:id', function(req,res) {

  Comment.findByIdAndRemove(req.params.id, function(error) {

    if(error) {

      console.log(error);
      res.send(500,error);

    } else {

      res.send(true);
    }
  });
});

router.get('/users', function(req,res) {

  User.find(function(error, users) {

    if(error) {

      console.log(error);
      res.send(500,error);

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

        console.log(error);
        res.send(500,error);

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
  newUser.save(function(error, user) {

    if(error) {

      console.log(error);
      res.send(500,error);

    } else {

      res.json(user);
    }
  });
});

router.put('/users/:id', function(req,res) {

  var updatedUser = {};

  if(req.body.email) {

    updatedUser.email = req.body.email;
  }

  if(req.body.password) {

    updatedUser.password = req.body.password;
  }

  if(req.body.firstName) {

    updatedUser.firstName = req.body.firstName;
  }

  if(req.body.lastName) {

    updatedUser.lastName = req.body.lastName;
  }

  User.findByIdAndUpdate(req.params.id, {

    $set: updatedUser
    },
    function(error, user) {

      if(error) {

        console.log(error);
        res.send(500,error);
      }

      res.send(user);
    }
  );

  var newLinkItem = new LinkItem(req.body.linkItem);
  newLinkItem.save(function(error, user) {

    if(error) {

      console.log(error);
      res.send(500,error);

    } else {

      res.json(user);
    }
  });
});

router.delete('/users/:id', function(req,res) {

  User.findByIdAndRemove(req.params.id, function(error) {

    if(error) {

      console.log(error);
      res.send(500,error);

    } else {

      res.send(true);
    }
  });
});

module.exports = router;