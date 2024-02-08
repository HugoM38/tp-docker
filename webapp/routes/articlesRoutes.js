const express = require('express');
const articlesController = require('../controllers/articlesController');

const router = express.Router();

router.get('/', articlesController.getArticles);

module.exports = router;
