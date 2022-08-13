const mongoose = require('mongoose');
const Shrinked = require('../Models/Shrinked');

module.exports = {
    HomePage:async (req,res)=>{
        const shortUrl = await Shrinked.find();
        res.render('homepage',{shortUrl:shortUrl});
    },
    ShrinkUrl:async (req,res)=>{
        const shr = new Shrinked({
            _id: new mongoose.Types.ObjectId(),
            full:req.body.fullUrl,
            createdAt:Date.now()
           });
    
          await shr.save()
         res.redirect('/')
    },
    GetShrinked: async (req, res)=>{
        const shr = await Shrinked.findOne({shorted:req.params.shortUrl});
        if(shr == null) return res.sendStatus(404)
    
        res.redirect(shr.full)
    }


}