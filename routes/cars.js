const express = require('express');
const Router = express.Router();

//Import Models
const Seller = require('../models/sellers');
const Cars = require("../models/cars");


Router.post("/:id", (req,res)=>{
    const cars = new Cars();
    const seller = new Seller();
    const sid = req.params.id;
    cars.name = req.body.name;
    cars.year = req.body.year;
    Seller.findById(sid, (err, seller)=>{
        cars.seller = seller;
        cars.save((err)=>{
            if(err){
                throw err;
            }
            else{
                res.json({"Status" : "Car Assigned for Seller"});
            }
        });
        seller.cars.push(cars);
        seller.save();
    });
});

module.exports = Router;