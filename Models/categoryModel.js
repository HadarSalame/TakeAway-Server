const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    categoryID:{ type: Number, require },
    categoryName: { type: String, require },
  
})   

module.exports = mongoose.model("Category", categorySchema)
