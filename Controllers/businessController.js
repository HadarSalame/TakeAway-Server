const claintModel=require('../Models/claintModel');
const BusinessModel=require('../Models/businessModel');
const categoryModel=require('../Models/categoryModel');
const portionModel=require('../Models/portionModel');
const { model } = require('mongoose');


//לקוח חדש
const CreateBusiness = async (req, res) => {
    console.log("++++++++++++++++++++++++++++++++++")
    let business = req.body
    try{ 

        let Business =await new BusinessModel(business)
        await Business.save()
        res.send("Added successfully")
    console.log("sucssec")

    }
    catch(e){
        res.status(400).send(e)
    console.log("erore"+e)
 

    }

}

//התחברות לעסק

const BusinessLogin = (req, res) => {
    let id = req.params.businessID
    let email = req.params.businessEmail
    let pass = req.params.businesspassword
    BusinessModel.findOne({ businessID: id,businessEmail:email ,businesspassword: pass }).then((response) => {
        res.send("Login successfully")

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון שם העסק
const UpdatebusinessName = (req, res) => {
    let name = req.params.businessName
    let newName = req.body.businessName
    BusinessModel.findOneAndUpdate({ businessName: name }, { businessName: newName }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון שם בעל העסק
const UpdatebusinessOwnerName = (req, res) => {
    let Oname = req.params.businessOwnerNamestName
    let newOName = req.body.businessOwnerName
    BusinessModel.findOneAndUpdate({ businessOwnerName: Oname}, { businessOwnerName: newOName }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון טלפון
const UpdatebusinessPhone = (req, res) => {
    let phone = req.params.businessPhone;
    let newPhone = req.body.businessPhone
    BusinessModel.findOneAndUpdate({ businessPhone: phone}, { businessPhone: newPhone }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}
//עדכון הכתובת
const UpdatebusinessAddress = (req, res) => {
    let phone = req.params.businessAddress;
    let newPhone = req.body.businessAddress
    BusinessModel.findOneAndUpdate({ businessAddress: phone}, { businessAddress: newPhone }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון המייל
const UpdatebusinessEmail = (req, res) => {
    let email = req.params.businessEmail;
    let newemail = req.body.businessEmail
    BusinessModel.findOneAndUpdate({ businessEmail: email}, { businessEmail: newemail }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון סיסמה
const UpdatebusinessPassword = (req, res) => {
    let pass = req.params.businesspassword;
    let newpass = req.body.businesspassword
    BusinessModel.findOneAndUpdate({ businesspassword: pass}, { businesspassword: newpass }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//אימות סיסמה
//כשרות
//לוגו


module.exports={CreateBusiness,BusinessLogin,UpdatebusinessName,UpdatebusinessOwnerName,UpdatebusinessPhone,UpdatebusinessEmail,UpdatebusinessPassword,UpdatebusinessAddress};