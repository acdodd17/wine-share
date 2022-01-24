const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');

// Get all post on homepage
router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'wine_name',
        'wine_vintage',
        'wine_source',
        'wine_type',
        'img_url'
        //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
      ],
      include: [
        // {
        //   model: Comment,
        //   attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        //   include: {
        //     model: User,
        //     attributes: ['username']
        //   }
        // },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({plain: true}));
        res.render('homepage',{
            posts, 
            loggedIn: req.session.loggedIn,
            images: firebase.getImages(user_id)
        }); 
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
    }); 
  });

// Login homepage
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return; 
    }
    res.render('login'); 
});

// Get post by ID 
router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'wine_name',
        'wine_vintage',
        'wine_source',
        'wine_type',
        'img_url'
        //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
      ],
      include: [
        // {
        //   model: Comment,
        //   attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        //   include: {
        //     model: User,
        //     attributes: ['username']
        //   }
        // },
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
        res.render('single-post', {
          post,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  
  

module.exports = router;
