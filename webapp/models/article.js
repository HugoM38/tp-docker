const pool = require('../database');

class Article {
  static async fetchAll() {
    const [rows] = await pool.query('SELECT id, titre, contenu, date_publication FROM articles ORDER BY date_publication DESC');
    return rows;
  }
}

module.exports = Article;
