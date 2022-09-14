const orderModel = require('../Models/orderModel');
const claintModel = require('../Models/claintModel');
const { model } = require('mongoose');

//הזמנה חדשה
const CreateOrder = async (req, res) => {
    let order = req.body
console.log("uuu")
    try {
        let Create = await new orderModel(order)
        console.log(Create)
        await Create.save()


        const idClient= Create.claintID;
        const client = await claintModel.findOne({ _id: idClient });
        client.orders.push(Create);
        const updated = await claintModel.findByIdAndUpdate(idClient, client, { new: true });
        res.json({message:"Added successfully",Create})



        res.status(200).send(updated)
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
// שליפת כל ההזמנות שעדין לא נענו 
const getOrdersFalse= async function (req, res, next) {
    try {
        const users = await orderModel.find({StatusOrder:false});
        res.send(users);
    }
    catch (error) {
        next(error);
    }
}

//שליפת הזמנות ע"פ קוד לקוח
const getOrderById = async function (req, res, next) {
    try {
        const idClaint = req.params.id;
        const order = await orderModel.find({ claintID: idClaint }).populate({
            path : 'bids',
            populate : {
              path : 'business'
            }
          })

        console.log(order);
        res.send(order);
    }
    catch (error) {
        next(error);
    }
}



module.exports = { CreateOrder,DeleteOrderById,getOrders,getOrderById,getOrdersFalse }

