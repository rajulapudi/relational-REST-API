const express = require('express');
const Router = express.Router();

//Import Models
const Seller = require('../models/sellers');

//Seller Routes

Router.get("/", (req,res)=>{
    Seller.find({},(err,data)=>{
        if(err){
            throw err;
        }
        else{
            res.send(data);
        }
    });
});

Router.post("/", (req,res)=>{
    const seller = new Seller();
    seller.name = req.body.name;
    seller.email = req.body.email;
    seller.save((err)=>{
        if(err){
            throw err;
        }
        else{
            res.json({"Status" : "Data Sent"});
        }
    });

});

module.exports = Router;