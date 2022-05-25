const claintModel=require('../Models/claintModel');
const BusinessModel=require('../Models/businessModel');
const categoryModel=require('../Models/categoryModel');
const portionModel=require('../Models/portionModel');
const { model } = require('mongoose');

//משתמש חדש
const CreateClaint = async (req, res) => {
    let claint = req.body.claint
    try{

        let CreateClaint =await new userModel(claint)
        await CreateClaint.save()
        res.send("Added successfully")
    }
    catch(e){
        res.send(e)
    }

}

//התחברות ללקוח
const claintLogin = (req, res) => {
    let name = req.params.name
    let pass = req.params.pass
    claintLogin.findOne({ claintName: name, password: pass }).then((response) => {
        res.send("Login successfully")

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון שם משתמש
const UpdateClaintName = (req, res) => {
    let name = req.params.claintName
    let newName = req.body.claintName
    claintModel.findOneAndUpdate({ claintName: name }, { claintName: newName }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון שם משפחה
const UpdateClaintLastName = (req, res) => {
    let Lname = req.params.claintLastName
    let newLName = req.body.claintLastName
    claintModel.findOneAndUpdate({ claintLastName: Lname}, { claintLastName: newLName }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון טלפון
const UpdateClaintPhone = (req, res) => {
    let phone = req.params.claintPhone;
    let newPhone = req.body.claintPhone
    claintModel.findOneAndUpdate({ claintPhone: phone}, { claintPhone: newPhone }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון המייל
const UpdateClaintEmail = (req, res) => {
    let phone = req.params.claintEmail;
    let newPhone = req.body.claintEmail
    claintModel.findOneAndUpdate({ claintEmail: phone}, { claintEmail: newPhone }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון סיסמה
const UpdateClaintPassword = (req, res) => {
    let phone = req.params.claintEmail;
    let newPhone = req.body.claintEmail
    claintModel.findOneAndUpdate({ claintEmail: phone}, { claintEmail: newPhone }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

module.exports={CreateClaint,claintLogin,UpdateClaintName,UpdateClaintLastName,UpdateClaintPhone,UpdateClaintEmail}

