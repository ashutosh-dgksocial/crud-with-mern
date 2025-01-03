const express = require("express");
const path = require("path");
const multer = require("multer");
const postController = require('../controllers/postController')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/postImages"));
    },
    filename: (req, file, cb) => {
        const date = Date.now();
        cb(null, date + "-" + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Define your post routes
const post_app_route = express.Router();

// Example post route to handle file upload
post_app_route.post('/create-post',upload.single('image'), postController.createPost);

module.exports = post_app_route;
