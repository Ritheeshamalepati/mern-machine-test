// Sample content for routes/uploadRoutes.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const { uploadCSV } = require('../controllers/uploadController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Setup file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});

// Validate file types
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    const filetypes = /csv|xlsx|xls/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (extname) {
      return cb(null, true);
    }
    cb('Error: Only CSV, XLSX, XLS files are allowed!');
  }
});

// POST /api/upload
router.post('/', authMiddleware, upload.single('file'), uploadCSV);

module.exports = router;
