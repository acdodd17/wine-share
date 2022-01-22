const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Rating } = require('../../models');


// get all Wine Post 
router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'wine_name',
        'wine_vintage',
        'wine_source',
        'wine_type',
        'img_url',
        'notes'
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
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
        'img_url',
        'notes'
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
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
      type: req.body.type,
      img_url: req.body.img_url,
      user_id: req.session.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    });

// Wine voting 
    router.put('/upvote', (req, res) => {
        if (req.session) {
          Post.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
            .then(updatedVoteData => res.json(updatedVoteData))
            .catch(err => {
              console.log(err);
              res.status(500).json(err);
            });
        }
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

