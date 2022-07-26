const mongoose = require('mongoose');

const PortionSchema = mongoose.Schema({
    // portionID:{type:Number,require},
    portionName: { type: String, require },
    categoryName:{ type: String, require },
    // price:{type:Number},
       

}) 

module.exports = mongoose.model("Portion", PortionSchema)

