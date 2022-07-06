const { model } = require('mongoose');
const portionModel=require('../Models/portionModel');


const CreatePortion = async (req, res) => {
    console.log("++++++++++++++++++++++++++++++++++")

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
module.exports={CreatePortion}
