const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');


// get all Wine Post 
router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'wine_name',
      'wine_vintage',
      'wine_source',
      'wine_type',
      'img_url'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

  // Get Post by ID
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
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Post a Wine 
router.post('/', withAuth, (req, res) => {
  Post.create({
    wine_name: req.body.wine_name,
    wine_vintage: req.body.wine_vintage,
    wine_source: req.body.wine_source,
    wine_type: req.body.wine_type,
    img_url: req.body.img_url,
    user_id: req.session.user_id
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

// Delete a Post 
router.delete('/:id', (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;

