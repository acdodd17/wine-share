const router = require('express').Router(); 

const commentRoutes = require('./comment-routes'); 
const postRoutes = require('./post-routes'); 
const ratingRoutes = require('./rating-routes'); 
const userRoutes = require('./user-routes'); 

router.use('/comments', commentRoutes);
router.use('/posts', postRoutes); 
router.use('/ratings', ratingRoutes); 
router.use('/users', userRoutes); 

module.exports = router; 

