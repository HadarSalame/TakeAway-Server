const { model } = require('mongoose');
const categoryModel=require('../Models/categoryModel');


const CreateCategory = async (req, res) => {
    console.log("++++++++++++++++++++++++++++++++++")

    try{ 

        let category =await new categoryModel(req.body)
        await category.save()
        res.send("Added successfully")
    console.log("sucssec")

    }
    catch(e){
        res.status(400).send(e)
    console.log("erore"+e)
 

    }

}
module.exports={CreateCategory}
