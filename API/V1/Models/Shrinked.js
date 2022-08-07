const mongoose = require('mongoose');
const shortid = require('shortid');
mongoose.pluralize(null);
const Schema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    full:String,
    shorted:{
        type:String,
        require:true,
        default:shortid.generate
    }
});

module.exports = mongoose.model("Shrinked",Schema);