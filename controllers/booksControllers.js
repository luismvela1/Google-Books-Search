const db = require("../models");

module.exports = {
    findAll: function(req,res){
        db.googlebooks
            .findAll(req.query)
            .sort({date:-1})
            .then(dbModel =>res.json(dbModel))
            .catch(err=> res.status(422).json(err));
    },
    findOne: function(req,res){
        db.googleBooks
            .findOne(req.params.id)
            .then(dbModel =>res.json(dbModel))
            .catch(err=> res.status(422).json(err));
    },
    create: function(req,res){
        db.googleBooks
            .find(req.body)
            .then(dbModel =>res.json(dbModel))
            .catch(err=> res.status(422).json(err));
    },
    update: function(req,res){
        db.googleBooks
            .findOneAndUpdate({_id:req.params.id},req.body)
            .then(dbModel =>res.json(dbModel))
            .catch(err=> res.status(422).json(err));
    },
    remove: function(req,res){
        db.googleBooks
            .findById({_id:req.params.id})
            .then(dbModel =>dbModel.remove())
            .then(dbModel =>res.json(dbModel))
            .catch(err=> res.status(422).json(err));
    },
}