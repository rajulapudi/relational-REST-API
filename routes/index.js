const express = require("express");
const Router = express.Router();

//Import Router Components
const carsRouter = require("./cars");
const sellerRouter = require("./sellers");


Router.use("/cars", carsRouter);
Router.use("/sellers", sellerRouter);

module.exports = Router;
