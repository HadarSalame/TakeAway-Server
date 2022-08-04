const claintModel = require('../Models/claintModel');
const BusinessModel = require('../Models/businessModel');
const categoryModel = require('../Models/categoryModel');
const portionModel = require('../Models/portionModel');
const OrderModel = require('../Models/orderModel');
const businessModel = require('../Models/businessModel');
const bidsModel = require('../Models/bidsModel');
const orderModel = require('../Models/orderModel');

//לקוח חדש
const CreateBusiness = async (req, res) => {

    let business = req.body
    try {

        let Business = await new BusinessModel(business)
        await Business.save()
        res.send("Added successfully")
        console.log("sucssec")

    }
    catch (e) {
        res.status(400).send(e)
        console.log("erore" + e)


    }

}
//מחיקת מנהל
const DeleteBusinessyId = async (req, res) => {
    try {
        const id = req.params.id;
        const B = await BusinessModel.findOneAndDelete(id);

        res.send(B);
    }
    catch (error) {
        console.log(error);
    }

}

// שליפת כל המנהלים
const getBusiness = async function (req, res, next) {
    try {
        const users = await BusinessModel.find();
        res.send(users);
    }
    catch (error) {
        next(error);
    }
}
//שליפת מנהל ע"פ מייל
const getBusinessByEmail = async function (req, res, next) {
    try {

        const email = req.params.email;
        const user = await BusinessModel.findOne({ businessEmail: email });
        console.log(user);
        res.send(user);
    }
    catch (error) {
        next(error);
    }
}


//שליפה לפי תאריך אם הוא פנוי
//בדיקה של ההזמנות מי יש לו את התאריך הזה, 
//שליפה של ההצעות לכל אחד מההזמנות האלה
//אם יש אחת ההצעות סטטוס סגור - את העסק שסגר איתו להוריד מהרשימה
const IsClear = (req, res) => {
    let date = req.params.date
    let bus = [];
    bidsModel.find({ status: true }).then((ress) => {
        ress.forEach(element => {
            let temp = orderModel.findOne({ bids: { _id: element._id } })
            if (temp.eventDate == date) {
                bus.push(element.business)
            }
            console.log(temp);

        });
    })
    businessModel.find({ _id: { $nin: [bus] } }).then((r) =>
        r.send()
    ).catch((error) => {
        res.send('error :' + error)
    })




    // OrderModel.find({ eventDate: date, bids: { status: true } }).then((ress) => {
    //     console.log(ress);
    //     ress.forEach(element => {
    //         for (let index = 0; index < ress.length; index++) {
    //             if (ress[index].bids.status == true)

    //         } (element.bids)

    //     });
    //     let b = businessModel.find()

    // })


}


//התחברות לעסק

const BusinessLogin = (req, res) => {
    let id = req.params.businessID
    let email = req.params.businessEmail
    let pass = req.params.businesspassword
    BusinessModel.findOne({ businessID: id, businessEmail: email, businesspassword: pass }).then((response) => {
        console.log(response);

        console.log(response)
        if (response == null) {
            res.send(response)
        }
        else {
            res.send(response)
        }

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
    BusinessModel.findOneAndUpdate({ businessOwnerName: Oname }, { businessOwnerName: newOName }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון טלפון
const UpdatebusinessPhone = (req, res) => {
    let phone = req.params.businessPhone;
    let newPhone = req.body.businessPhone
    BusinessModel.findOneAndUpdate({ businessPhone: phone }, { businessPhone: newPhone }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}
//עדכון הכתובת
const UpdatebusinessAddress = (req, res) => {
    let phone = req.params.businessAddress;
    let newPhone = req.body.businessAddress
    BusinessModel.findOneAndUpdate({ businessAddress: phone }, { businessAddress: newPhone }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון המייל
const UpdatebusinessEmail = (req, res) => {
    let email = req.params.businessEmail;
    let newemail = req.body.businessEmail
    BusinessModel.findOneAndUpdate({ businessEmail: email }, { businessEmail: newemail }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//עדכון סיסמה
const UpdatebusinessPassword = (req, res) => {
    let pass = req.params.businesspassword;
    let newpass = req.body.businesspassword
    BusinessModel.findOneAndUpdate({ businesspassword: pass }, { businesspassword: newpass }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//אימות סיסמה
//כשרות
//לוגו


module.exports = { CreateBusiness, DeleteBusinessyId, getBusiness, getBusinessByEmail, BusinessLogin, UpdatebusinessName, UpdatebusinessOwnerName, UpdatebusinessPhone, UpdatebusinessEmail, UpdatebusinessPassword, UpdatebusinessAddress };