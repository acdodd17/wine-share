const router = require('express').Router()
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { User, Post } = require('../models');

router.get('/', (req, res) => {
  User.findAll({
    attributes: [
      'id', 
      'username', 
      'email'
    ]
  })
  .then(dbUserData => {
    const users = dbUserData.map(user => user.get({ plain: true }));
    res.render('homepage', { users, loggedIn: req.session.loggedIn  });
  })
  
});


// Login homepage
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return; 
  }
  res.render('login'); 
});

// get wine by id 
router.get('/post/:id', withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'wine_name',
      'wine_type',
      'wine_vintage',
      'wine_source',
      'wine_notes',
      [sequelize.literal('(SELECT COUNT(*) FROM count WHERE post.id = count.post_id)'), 'wine_count']
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });

      // pass data to template
      res.render('single-post', { post, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
