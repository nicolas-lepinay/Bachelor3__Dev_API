const router = require('express').Router();
const postsController = require('../controllers/posts');
const middleware = require('../controllers/middleware');

router.get('/', middleware.verify, postsController.findAll);       // GET POSTS

module.exports = router;