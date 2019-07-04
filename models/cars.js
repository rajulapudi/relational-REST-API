const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
    name : {
        type : String
    },
    year : {
        type : String
    },
    seller : {
        type : Schema.Types.ObjectId,
        ref : "seller"
    }
});
module.exports = mongoose.model("cars", carSchema, "carscollection");