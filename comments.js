// Create web server
const express = require('express');
const app = express();

// Set up template engine
app.set('view engine', 'ejs');

// Set up static files
app.use(express.static('public'));

// Listen to port 3000
app.listen(3000, () => {
  console.log('App listening on port 3000');
});

