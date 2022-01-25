const router = require('express').Router();
const cloudinary = require('../utils/cloudinary');
const upload = require('../utils/multer');

// post request
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        res.json(result);
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;



// //import firebase 
// const firebase = require('firebase');



// // Set the configuration for your app with env variables
// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     appId: process.env.APP_ID,
//     measurementId: process.env.MEASUREMENT_ID
// };

// //initialize app with config
// firebase.initializeApp(firebaseConfig);

// // upload file function
// function uploadFile (path, file) {
//     // Get a reference to the storage service, which is used to create references in your storage bucket
//     console.log(file.originalname);
//     var storage = firebase.storage();
//     var storageRef = storage.ref();
//     var filesRef = storageRef.child(`${path}/${file.originalname}`);
//     var metadata = {
//         contentType: 'image/jpg'
//     }
//     // upload file method
//     return filesRef.put(file.buffer, metadata).then((snapshot) => {
//         console.log("Uploaded a file!")
//     })
// }

// // connecting to router to respond to post request with upload id
// router.post('/:id', upload.single('file'), (req, res) => {
//     console.log(req.file);
//     uploadFile(req.params.id, req.file).then((result) => {
//         res.send(result);
//     })
// });

