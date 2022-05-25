const mongoose= require('mongoose')

const BusinessSchema=mongoose.Schema({
    businessID:{type:Number},
    businessName:{type:String,require},
    businessOwnerName:{type:String,require},
    businesstPhone:{type:Number,require},
    businessEmail:{type:String,require},
    businesspassword:{type:String,minlegnth:8,require},
    businessKosher:{type:String,require},
    businessKosherCertificate:{type:File,require},
    logoBusiness:{type:File,require},
    orders:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Order'}
    ]
    
})
module.exports = mongoose.model("Business", BusinessSchema)