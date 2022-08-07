const Router = require('express').Router();

const {HomePage,ShrinkUrl,GetShrinked} = require('../Controllers/Shrinked.js');

Router.get('/',HomePage);
Router.post('/shortUrl',ShrinkUrl);
Router.get('/:shortUrl',GetShrinked);

module.exports= Router;