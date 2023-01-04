const claintModel = require('../Models/claintModel');
const BusinessModel = require('../Models/businessModel');
const categoryModel = require('../Models/categoryModel');
const portionModel = require('../Models/portionModel');
const { model } = require('mongoose');


const CreateClaint = async (req, res) => {
    let claint = req.body
    console.log(claint)
    try {
        if (!await claintModel.findOne({ claintEmail: claint.claintEmail }) && !await BusinessModel.findOne({ businessEmail: claint.claintEmail })) {
            if (claint.password === claint.confirmPassword) {
                let CreateClaint = await new claintModel(claint)
                await CreateClaint.save()
                res.json({ message: "Added successfully", CreateClaint })
            }
            else {
                res.send('password')
            }
        }
        else {
            res.send("exist");
        }
    }
    catch (e) {
        res.send(e)
    }

}


//מחיקת לקוח
const DeleteClaintById = async (req, res) => {
    console.log(res.params);
    try {
        const id = req.params.id;
        console.log(id)
        const claint = await claintModel.findOneAndDelete({ _id: id });
        console.log(claint + 'done')
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
    // console.log("login");
    let email = req.params.claintEmail
    let pass = req.params.password
    claintModel.findOne({ claintEmail: email, password: pass }).then((response) => {
        console.log(response)
        if (response === null)
            res.send('undefined')
        else
            res.send(response)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון  משתמש
const UpdateClaint = async (req, res) => {
    console.log(req.params);
    console.log(req.body);
    await claintModel.updateOne({ _id: req.params.id }, req.body).then((u) => {
        console.log('update user!!', u);
        return res.status(200).json(u)
    }).catch(error => {
        console.error('err update user' + error)
    })

}


//אימות סיסמה

module.exports = { CreateClaint, DeleteClaintById, getClaint, getClaintByEmail, claintLogin, UpdateClaint }

