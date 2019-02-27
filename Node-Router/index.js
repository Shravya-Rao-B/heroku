const express = require('express');
const app = express();
const port = 3000;

var bodyParser = require('body-parser')
app.use(bodyParser.json({ type: 'application/json' }))

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/shravya');

var things = require('./things.js');

app.use('/things', things);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));