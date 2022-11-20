const orderModel = require('../Models/orderModel');
const claintModel = require('../Models/claintModel');
const { model } = require('mongoose');

//הזמנה חדשה
const CreateOrder = async (req, res) => {
    let order = req.body
    try {
        let Create = await new orderModel(order)
        console.log(Create)
         Create.save().then((()=>{
             res.json({message:"Added successfully",Create});
             res.status(200).send(updated )
         })
)
        


        const idClient= Create.claintID;
        const client = await claintModel.findOne({ _id: idClient });
        client.orders.push(Create);
        const updated = await claintModel.findByIdAndUpdate(idClient, client, { new: true });




      
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
        const users = await orderModel.find({StatusOrder:false}).populate('claintID');
        console.log(users);
        res.send(users);
    }
    catch (error) {
        next(error);
    }
}
const getOrder= async function (req, res, next) {
    try {
        const order = await orderModel.findById(req.params.id).populate({
            path : 'portion'
          });
        console.log(order)

        res.send(order);
    }
    catch (error) {
        next(error);
    }
}

//שליפת הזמנות ע"פ קוד לקוח
const getOrderById = async function (req, res, next) {
    try {
        const idClaint = req.params.id;
        const order = await orderModel.find({ claintID: idClaint })

        console.log(order);
        res.send(order);
    }
    catch (error) {
        next(error);
    }
}



module.exports = { CreateOrder,DeleteOrderById,getOrders,getOrderById,getOrdersFalse ,getOrder}

