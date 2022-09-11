const mongoose= require('mongoose')

const OrderSchema=mongoose.Schema({
    // ordertID:{type:Number},
    // businessID:{type:String},
    claintID: {type:mongoose.Schema.Types.ObjectId,ref:'Claint'},
    orderDate:{type:Date},
    eventDate:{type:Date,require},
    portion:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Portion'}
    ],
    numInvited:{type:Number},//כמות מנות?
    // eventAddress:{type:String},
    bids:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Bids'}
    ],
    StatusOrder:{type:Boolean}

})


module.exports = mongoose.model("Order", OrderSchema)