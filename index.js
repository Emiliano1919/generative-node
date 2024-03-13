const express = require('express');


// APP
const app = express();

app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));



app.get('/', (req, res) => {
  res.redirect('/about');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/examples', (req, res) => {
    res.render('examples');
});

app.use((req, res) => {
  res.status(404).render('404');
});