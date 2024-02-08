const express = require('express');
const articlesController = require('../controllers/articlesController');

const router = express.Router();

router.get('/', articlesController.getArticles);
router.post('/add', articlesController.addArticle);

module.exports = router;
