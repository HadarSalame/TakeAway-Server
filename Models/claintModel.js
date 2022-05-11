const mongoose= require('mongoose')

const ClaintSchema=mongoose.Schema({
    claintID:{type:Number},
    claintFirstName:{type:String,require},
    claintLastName:{type:String,require},
    claintPhone:{type:Number,require},
    claintEmail:{type:String,require},
    password:{type:String,minlegnth:8,require},
    


})