const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

// Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files. 
// It is designed to handle all of the heavy lifting for you, so that you can focus on writing your application rather than worrying about file uploads.
// It is designed to scale and can process a large number of file uploads concurrently without running out of memory.

const upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
      },
      filename: (req, file, cb) => {
        let customFileName = crypto.randomBytes(18).toString("hex"),
          fileExtension = file.originalname.split(".")[1];
        cb(null, customFileName + "." + fileExtension);
      }
    })
  });

module.exports = upload;

  