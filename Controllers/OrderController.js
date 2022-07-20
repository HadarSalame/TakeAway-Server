const orderModel = require('../Models/orderModel');
const { model } = require('mongoose');

//משתמש חדש
const CreateOrder = async (req, res) => {
    let order = req.body
console.log("uuu")
    try {
        let Create = await new orderModel(order)
        console.log(Create)
        await Create.save()
        res.status(200).send("Added successfully")
    }
    catch (e) {
        res.status(400).send(e)
    }

}
//מחיקת הזמנה
const DeleteOrderById = async (req, res)=> {
    try {
        const id = req.params.id;
        const order = await orderModel.findOneAndDelete(id);
        res.send(order);
    }
    catch (error) {
        console.log(error);
    }

}
// שליפת כל ההזמנות
const getOrders= async function (req, res, next) {
    try {
        const users = await orderModel.find();
        res.send(users);
    }
    catch (error) {
        next(error);
    }
}


module.exports = { CreateOrder,DeleteOrderById,getOrders }

