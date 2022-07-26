const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    // categoryID:{ type: Number, require },

    //איך זה עובד עם המנות והקטגוריות??
    categoryName: { type: String, require },
    //הוספת מספר אפשרי
    chooseNumber:{ type: Number,require},
  
})   

module.exports = mongoose.model("Category", categorySchema)
