const bidsModel = require('../Models/bidsModel');
const { model } = require('mongoose');

//הצעת מחיר חדש
const CreateBid = async (req, res) => {
    let Bids = req.body
    try {

        let Create = await new bidsModel(Bids)
        await Create.save()
        res.send("Added successfully")
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
  


module.exports = { CreateBid,DeleteBidById,getbidsByOrder }

