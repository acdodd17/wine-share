// const router = require('express').Router(); 
// const { Comment } = require('../../models'); 
// const withAuth = require('../../utils/auth'); 

// // Get All Comments
// router.get('/', (req, res) => {
//     Comment.findAll()
//       .then(dbCommentData => res.json(dbCommentData))
//       .catch(err => {
//           console.log(err); 
//           res.status(500).json(err); 
//       });
// }); 

// // Post A New Comment 
// router.post('/', withAuth, (req, res) => {
//     if (req.session) {
//         Comment.create({
//             comment_text: req.body.comment_text,
//             wine_id: req.body.wine_id,
//             user_id: req.session.user_id,
//         })
//           .then(dbCommentData => res.json(dbCommentData))
//           .catch(err => {
//               console.log(err);
//               res.status(400).json(err); 
//           });
//     }
// }); 

// // Delete Comments 
// router.delete('/:id', withAuth, (req, res) => {
//     Comment.destory({
//         where: {
//             id: req.params.id
//         }
//     })
//       .then(dbCommentData => {
//           if (!dbCommentData) {
//               res.status(404).json({message: 'No comment found with this ID'});
//               return; 
//           }
//           res.json(dbCommentData); 
//       })
//       .catch(err => {
//           console.log(err); 
//           res.status(500).json(err); 
//       });
// }); 


// module.exports = router; 