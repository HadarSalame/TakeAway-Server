const { model } = require('mongoose');
const portionModel=require('../Models/portionModel');

//יצירת מנה חדשה
const CreatePortion = async (req, res) => {

    try{ 

        let Business =await new portionModel(req.body)
        await Business.save()
        res.send("Added successfully")
    console.log("sucssec")

    }
    catch(e){
        res.status(400).send(e)
    console.log("erore"+e)
 

    }

}

//  שליפת כל המנות 
const getPortion= async function (req, res, next) {
    try {
        const users = await portionModel.find();
        res.send(users);
    }
    catch (error) {
        next(error);
    }
}
module.exports={CreatePortion,getPortion}
