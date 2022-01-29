const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Count } = require('../../models');
const withAuth = require('../../utils/auth');


// get all Wine Post 
router.get('/', (req, res) => {
  Post.findAll({
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get wine post by id
router.get('/:id', (req, res) => {
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
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create new wine 
router.post('/', withAuth, (req, res) => {
  Post.create({
    wine_name: req.body.wine_name,
    wine_type: req.body.wine_type,
    wine_vintage: req.body.wine_vintage,
    wine_source: req.body.wine_source,
    wine_notes: req.body.wine_notes,
    user_id: req.session.user_id
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

// add to bottle count
router.put('/quantity', withAuth, (req, res) => {
  // custom static method created in models/Post.js
  Post.upcount({ ...req.body, user_id: req.session.user_id }, { Count, User })
    .then(updatedCountData => res.json(updatedCountData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Edit a wine post 
router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
      wine_name: req.body.wine_name,
      wine_type: req.body.wine_type,
      wine_vintage: req.body.wine_vintage,
      wine_source: req.body.wine_source,
      wine_notes: req.body.wine_notes,
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
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

  