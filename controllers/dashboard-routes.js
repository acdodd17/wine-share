const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
    Post.findAll({
      where: {
        user_id: req.session.user_id
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
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render('dashboard', { posts, loggedIn: true});
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});



module.exports = router;
