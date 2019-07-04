//External NPMs
const express = require('express');
const bodyParser = require('body-parser');

//Internal Files
const db = require('./dbConnect');

//Models

//Routes
const indexRouter = require("./routes");

const port = process.env.PORT || 3333;

//MiddleWare
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("views"));
app.use("/", indexRouter);


app.listen(port,()=>{console.log(`Listening on ${port}`)});
