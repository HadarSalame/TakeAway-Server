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
    // שליפת כל הקטגוריות
const getCategory= async function (req, res, next) {
    try {
        const users = await categoryModel.find();
        res.send(users);
    }
    catch (error) {
        next(error);
    }
}


module.exports={CreateCategory,getCategory}
