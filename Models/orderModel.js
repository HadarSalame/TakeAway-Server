const mongoose= require('mongoose')

const OrderSchema=mongoose.Schema({
    ordertID:{type:Number},
    businessID:{type:String,require},
    claintID:{type:String,require},
    orderDate:{type:Date},
    eventDate:{type:Date,require},
    portion:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Portion'}
    ]
})

module.exports = mongoose.model("Order", OrderSchema)