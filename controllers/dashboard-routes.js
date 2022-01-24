const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/',  (req, res) => {
    Post.findAll({
      where: {
        user_id: req.session.user_id
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
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render('dashboard', { posts });
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});

// router.get('/post/:id', (req, res) => {
//   Post.findOne({
//     where: {
//       id: req.params.id
//     }, 
//     attributes: [
//         'id',
//         'wine_name',
//         'wine_vintage',
//         'wine_source',
//         'wine_type',
//         'img_url'
//     ],
//     include: [
//         {
//           model: User,
//           attributes: ['username']
//         }
//     ]
//   })
//   .then(dbPostData => {
//     if (!dbPostData) {
//       res.status(404).json({ message: 'No post found with this id!' });
//       return
//     }
//     //serialize the data 
//     const post = dbPostData.get({ plain: true });
//     // pass data to template
//     res.render('single-post', { post, loggedIn: req.session.loggedIn});
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   })
 
// });

module.exports = router;
