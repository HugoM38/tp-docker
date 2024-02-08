const pool = require('../database');

class Article {
  static async fetchAll() {
    const [rows] = await pool.query('SELECT id, titre, contenu, date_publication FROM articles ORDER BY date_publication DESC');
    return rows;
  }
  
  static async add(articleData) {
    const { titre, contenu, date_publication } = articleData;
    await pool.query('INSERT INTO articles (titre, contenu, date_publication) VALUES (?, ?, ?)', [titre, contenu, date_publication]);
  }
}

module.exports = Article;
