const bidsModel = require('../Models/bidsModel');
const orderModel = require('../Models/orderModel');
const { model } = require('mongoose');
const { create } = require('../Models/orderModel');

//הצעת מחיר חדש
const CreateBid = async (req, res) => {
    let Bids = req.body
    try {

        let Create = await new bidsModel(Bids)
        await Create.save()

        const idorder= Create.order;
        const orderbid = await orderModel.findOne({ _id: idorder });
        console.log(orderbid)
        orderbid.bids.push(Create)
        const updated = await orderModel.findByIdAndUpdate(idorder, orderbid, { new: true });
      
        res.send(updated)
    }
    catch (e) {
        res.send(e)
    }
}
//מחיקת הצעת מחיר
const DeleteBidById = async (req, res)=> {
    try {
        const id = req.params.id;
        const bid = await bidsModel.findOneAndDelete(id);
        res.send(bid);
    }
    catch (error) {
        console.log(error);
    }
}
//שליפת הצעות לפי הזמנה
const getbidsByOrder = async function (req, res, next) {
    try {
         console.log("iii")
          const order = req.params.order;
          const user = await bidsModel.find({ order: order });
          console.log(user);
          res.send(user);
      }
      catch (error) {
          next(error);
      }
  }
  //עדכון הזמנה ע"פ id לצורך עדכון הסטאטוס-
const updatBidsById = async function (req, res, next) {
    console.log("in update");
    try {
        const id = req.params.id;
        const bids = req.body;
        const updated = await bidsModel.findByIdAndUpdate(id, bids, { new: true });
        res.send(updated);
    }
    catch (error) {
        next(error);
    }
}



module.exports = { CreateBid,DeleteBidById,getbidsByOrder,updatBidsById }

