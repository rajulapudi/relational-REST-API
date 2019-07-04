const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relations',  { useNewUrlParser: true }, (err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("MongoDB Server is connected");
    }
});