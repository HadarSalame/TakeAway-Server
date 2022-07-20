const mongoose= require('mongoose')

const bidsSchema=mongoose.Schema({

    price:{type:Number},
    business:{type:mongoose.Schema.Types.ObjectId,ref:'Business'} ,
    order:{type:mongoose.Schema.Types.ObjectId,ref:'Order'} ,
    


})

module.exports = mongoose.model("Bids", bidsSchema)