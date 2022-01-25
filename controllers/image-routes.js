const router = require('express').Router();
const fileUpload = require('express-fileupload');

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

router.post('/dashboard', (req, res) => {

    if(!req.files || Object.keys(req.files).lenghth === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const file = req.files.file;
    console.log(sampleFile);
})

module.exports = router;