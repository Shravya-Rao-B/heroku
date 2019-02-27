var express = require('express');
const app=express();
var mongoose=require('mongoose')

var thingSchema=mongoose.Schema({
    todo:{type:String},
    doNot:{type:String},
    done:{type:String}
 });
mongoose.model('Thing', thingSchema);