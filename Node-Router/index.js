const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

var bodyParser = require('body-parser')
app.use(bodyParser.json({ type: 'application/json' }))

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/shravya');

var things = require('./things.js');
var things2=require('./things2');
var things3=require('./things3');

app.use('/things', things);
app.use('/things2',things2);
app.use('/things3',things3); 

app.listen(port, () => console.log(`Example app listening on port ${port}!`));