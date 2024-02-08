const Article = require('../models/article');

exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.fetchAll();
    res.render('articles', { articles }); // Assurez-vous que le nom de la vue correspond au nom de votre fichier EJS.
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur lors de la récupération des articles');
  }
};

exports.addArticle = async (req, res) => {
  try {
    const { titre, contenu, date_publication } = req.body;
    await Article.add({ titre, contenu, date_publication });
    res.status(201).send('Article ajouté avec succès');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur lors de l\'ajout de l\'article');
  }
};
