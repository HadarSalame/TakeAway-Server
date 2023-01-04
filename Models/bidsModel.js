const mongoose= require('mongoose')

const bidsSchema=mongoose.Schema({

    price:{type:Number},
    business:{type:mongoose.Schema.Types.ObjectId,ref:'Business'} ,
    order:{type:mongoose.Schema.Types.ObjectId,ref:'Order'} ,
    marks:{type:String},//הערות
    status:{type:Boolean},//סטטוס הצעה - האם הם סוגרים יחד או לא
    isShow:{type:Boolean,default:false}
    


})

module.exports = mongoose.model("Bids", bidsSchema)

//עדכון הצעת מחיר
