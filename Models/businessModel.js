const mongoose= require('mongoose')

const BusinessSchema=mongoose.Schema({
    businessID:{type:Number},
    businessName:{type:String,require},
    businessOwnerName:{type:String,require},
    businessPhone:{type:Number,require},
    businessEmail:{type:String,require},
    businessAddress:{type:String,require},
    businesspassword:{type:String,minlegnth:8,require},
    businessKosher:{type:String,require},
    businessKosherCertificate:{type:String,require},
    logoBusiness:{type:String,require},
    orders:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Order'}
    ]
    
})
module.exports = mongoose.model("Business", BusinessSchema)