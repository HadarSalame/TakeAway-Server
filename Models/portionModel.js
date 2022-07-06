const mongoose = require('mongoose');

const PortionSchema = mongoose.Schema({
    portionID:{type:Number,require},
    portionName: { type: String, require },
    categoryid:{ type: Number, require },
    // price:{type:Number},
       

}) 

module.exports = mongoose.model("Portion", PortionSchema)

