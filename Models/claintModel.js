const mongoose= require('mongoose')

const ClaintSchema=mongoose.Schema({
    // claintID:{type:Number},
    eventDate:{type:String,require},
    claintFirstName:{type:String,require},
    claintLastName:{type:String,require},
    claintPhone:{type:Number,require},
    claintEmail:{type:String,require},
    password:{type:String,minlegnth:8,require},
    orders:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Order'}
    ]

 
})

module.exports = mongoose.model("Claint", ClaintSchema)