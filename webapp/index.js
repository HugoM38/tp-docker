const express = require('express');
const articlesRoutes = require('./routes/articlesRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public')); 

app.use(articlesRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Application écoutant sur http://localhost:${port}`);
});
