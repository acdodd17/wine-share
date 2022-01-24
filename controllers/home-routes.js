const router = require('express').Router();
const { Post, User } = require('../models');

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
    res.render('homepage', { users });
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


module.exports = router;
