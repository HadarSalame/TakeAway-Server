const mongoose= require('mongoose')

const MenuSchema=mongoose.Schema({
   menu:{type:string,require},
   //קוד מנה
   code
   //שם מנה

    


})

module.exports = mongoose.model("Menu", MenuSchema)