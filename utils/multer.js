const multer = require("multer");
const path = require("path");

// Multer config
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);  
    if (!file.mimetype.match(/png||jpeg||jpg||gif$i/)) {
      cb(new Error('File does not support'), false);
      return;
    }
    cb(null, true);
  },
});