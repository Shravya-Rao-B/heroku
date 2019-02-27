var express = require('express');
var router = express.Router();
var app=express();

var mongoose=require('mongoose');
//create a db using mongoose

//get the schema
require('./things_schema.js');
//get the model created for Thing
var Thing=mongoose.model('Thing');

router.get('/', function(req, res){
   res.send('GET route on things.');
});

router.post('/', function(req, res){
      var newThing = new Thing(req.body);
      newThing.save(function(err,data){
          if(err){
              res.send(err);
          }else{
              res.send(data);
          }
      })
    });
//export this router to use in our index.js
module.exports = router;