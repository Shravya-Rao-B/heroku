var express=require('express');
const app=express();
var router3=express.Router();
var mongoose=require('mongoose');

require('./things_schema.js');

// mongoose.connect('mongodb://localhost/thing');
var Thing=mongoose.model('Thing');

router3.get('/',(req,res)=>{
    res.send('Things 3 was called');
});
router3.post('/',(req,res)=>{
    var newThing = new Thing(req.body);
    newThing.save(function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
  });

module.exports = router3;