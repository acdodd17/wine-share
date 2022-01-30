const router = require('express').Router(); 

// const commentRoutes = require('./comment-routes'); 
const postRoutes = require('./post-routes'); 
const userRoutes = require('./user-routes'); 
//const imageRoutes = require('./image-routes')

// router.use('/comments', commentRoutes);
router.use('/posts', postRoutes); 
router.use('/users', userRoutes); 
//router.use('/upload', imageRoutes);

module.exports = router; 

