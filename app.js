const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Shrinked = require('./API/V1/Models/Shrinked')

const shrinkFuncs = require('./API/V1/Routers/Shrinked')

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/css'));
app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs');

app.use('/',shrinkFuncs);


const uri = process.env.MONGO_CONN;
mongoose.connect(uri);
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('Mongo Connected')});

module.exports = app;