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
        // if (!claintModel.findOne({ claintEmail: claint.claintEmail })) {
            let CreateClaint = await new claintModel(claint)
            await CreateClaint.save()
            res.json({ message: "Added successfully", CreateClaint })
        }
        // else{
        //     res.send("error: the user allredy exist");
        // }
    // }
    catch (e) {
        res.send(e)
    }

}
//מחיקת לקוח
const DeleteClaintById = async (req, res) => {

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
    console.log("login");
    let email = req.params.claintEmail
    let pass = req.params.password
    claintModel.findOne({ claintEmail: email, password: pass }).then((response) => {
        console.log(response)

        res.send(response)


    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון  משתמש
const UpdateClaint = async (req, res) => {
    console.log(req.params);
    await claintModel.updateOne({ _id: req.params._id }, req.body).then((u) => {
        console.log('update user!!', u);
        return res.status(201).json(u)
    }).catch(error => {
        console.error('err update user'+error)
    })

}


//אימות סיסמה

module.exports = { CreateClaint, DeleteClaintById, getClaint, getClaintByEmail, claintLogin,UpdateClaint }

