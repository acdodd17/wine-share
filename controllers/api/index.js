const router = require('express').Router(); 

// const commentRoutes = require('./comment-routes'); 
const postRoutes = require('./post-routes'); 
const userRoutes = require('./user-routes'); 
const firebaseRoutes = require('./firebase-routes')

// router.use('/comments', commentRoutes);
router.use('/posts', postRoutes); 
router.use('/users', userRoutes); 
router.use('/upload', firebaseRoutes);

module.exports = router; 

