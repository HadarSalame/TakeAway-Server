const claintModel = require('../Models/claintModel');
const BusinessModel = require('../Models/businessModel');
const categoryModel = require('../Models/categoryModel');
const portionModel = require('../Models/portionModel');
const { model } = require('mongoose');

//משתמש חדש
const CreateClaint = async (req, res) => {
    let claint = req.body
    console.log(claint)
    try {

        let CreateClaint = await new claintModel(claint)
        await CreateClaint.save()
        res.send("Added successfully")
    }
    catch (e) {
        res.send(e)
    }

}
//מחיקת לקוח
const DeleteClaintById = async (req, res)=> {
    console.log("oooooooooooooo")
    try {
        const id = req.params.id;
        console.log(id)
        const claint = await claintModel.findOneAndDelete(id);
        console.log(claint)
        res.send(claint);
    }
    catch (error) {
        console.log(error);
    }
}

// שליפת כל הלקוחות
const getClaint = async function (req, res, next) {
    try {
        const users = await claintModel.find();
        res.send(users);
    }
    catch (error) {
        next(error);
    }
}
//שליפת לקוח ע"פ מייל
const getClaintByEmail = async function (req, res, next) {
    try {
        const email = req.params.email;
        const user = await claintModel.findOne({ claintEmail: email });
        console.log(user);
        res.send(user);
    }
    catch (error) {
        next(error);
    }
}








//התחברות ללקוח
const claintLogin = (req, res) => {
    let email = req.params.claintName
    let pass = req.params.password
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
    claintModel.findOneAndUpdate({ claintLastName: Lname }, { claintLastName: newLName }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון טלפון
const UpdateClaintPhone = (req, res) => {
    let phone = req.params.claintPhone;
    let newPhone = req.body.claintPhone
    claintModel.findOneAndUpdate({ claintPhone: phone }, { claintPhone: newPhone }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון המייל
const UpdateClaintEmail = (req, res) => {
    let email = req.params.claintEmail;
    let newemail = req.body.claintEmail
    claintModel.findOneAndUpdate({ claintEmail: email }, { claintEmail: newemail }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון סיסמה
const UpdateClaintPassword = (req, res) => {
    let pass = req.params.password;
    let newpass = req.body.password
    claintModel.findOneAndUpdate({ password: pass }, { password: newpass }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//אימות סיסמה

module.exports = { CreateClaint,DeleteClaintById,getClaint,getClaintByEmail,   claintLogin, UpdateClaintName, UpdateClaintLastName, UpdateClaintPhone, UpdateClaintEmail, UpdateClaintPassword }

