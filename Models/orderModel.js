const mongoose= require('mongoose')

const OrderSchema=mongoose.Schema({
    // ordertID:{type:Number},
    // businessID:{type:String},
    claintID:{type:String,require},
    orderDate:{type:Date},
    eventDate:{type:Date,require},
    portion:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Portion'}
    ],
    numInvited:{type:Number},//כמות מנות?
    bids:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Bids'}
    ],

})

module.exports = mongoose.model("Order", OrderSchema)