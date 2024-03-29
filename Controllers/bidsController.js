const bidsModel = require('../Models/bidsModel');
const orderModel = require('../Models/orderModel');
const { model } = require('mongoose');
const { create } = require('../Models/orderModel');
const businessModel = require('../Models/businessModel');

//הצעת מחיר חדש
//יוצר הצעת מחיר רק אם אין לבעל העסק הצעה כזו
//מעדכן להזמנות הצעת מחיר חדשה
const CreateBid = async (req, res) => {
    let Bids = req.body
    console.log("newbid" + Bids);
    try {

        let Create = await new bidsModel(Bids)
        let bid = await bidsModel.findOne({ business: Bids.business });
        // let isOrderExist=await businessModel.findOne({orders:Bids.order});
        // console.log('isOrderExist',isOrderExist)/
        console.log('bid', bid)
        if (bid !== undefined || bid !== null) {
            await Create.save()
            const idorder = Create.order;
            const orderbid = await orderModel.findOne({ _id: idorder });
            console.log('orderbid', orderbid)
            orderbid.bids.push(Create)
            const updated = await orderModel.findByIdAndUpdate(idorder, orderbid, { new: true });
            res.send(updated)
            console.log('working', updated);
        }
        else {
            res.send("You have already sent an offer for this order")
            console.log("You have already sent an offer for this order")
        }
    }
    catch (e) {
        console.log(e + 'not working');
        res.send(e)
    }
}
//מחיקת הצעת מחיר
const DeleteBidById = async (req, res) => {
    try {
        const id = req.params._id;
        const bid = await bidsModel.findOneAndDelete({ _id: id });
        console.log(bid);
        res.send('delete');
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
        const user = await bidsModel.find({ order: order }).populate('business').populate('order');
        console.log(user);
        res.send(user);
    }
    catch (error) {
        next(error);
    }
}

//אישור הצעת מחיר=סגירת עיסקה
//עדכון הזמנה ע"פ id לצורך עדכון הסטאטוס-

const updatBidsById = async function (req, res, next) {
    console.log("in update");
    try {
        const idbid = req.params.id;
        let bids = await bidsModel.findOne({ _id: idbid });
        console.log(bids)
        const idorder = bids.order;
        let order = await orderModel.findOne({ _id: idorder });
        console.log(order)
        if (order.StatusOrder == true) {
            res.send("the order closed")
        }
        else {
            bids.status = true
            const updated1 = await bidsModel.findByIdAndUpdate(idbid, bids, { new: true });
            order.StatusOrder = true;
            const updated2 = await orderModel.findByIdAndUpdate(idorder, order, { new: true });
            res.send(updated2);
        }
    }
    catch (error) {
        next(error);
    }
}
//שליפת הצעות לפי עסק
const getbidsByBusiness = async function (req, res, next) {
    try {
        console.log("getbidsByBussines")
        const business = req.params.business;
        const user = await bidsModel.find({ business: business })
            .populate({
                path: 'order',
                populate: {
                    path: 'claintID'
                }
            })

        console.log(user);
        res.send(user);
    }
    catch (error) {
        next(error);
    }
}

const getTrueBids = async function (req, res, next) {
    try {
        console.log("getTrueBids")
        const status = req.params.status;
        console.log(status);
        if (status) {
            res.send(status);
        }
    }
    catch (error) {
        next(error);
    }
}

// עדכון שראה את ההצעה שאושרה

const setShowBids = async function (req, res, next) {
    const ids = req.body
    try {
        await bidsModel.updateMany({ _id: { $in: ids } }, { isShow: true });
        res.send('setShowBids');

    }
    catch (error) {
        next(error);
    }
}
// ביטול הצעה
const updateIsActiveBid = async function (req, res, next) {
    const id = req.params.id
    try {
        await bidsModel.findByIdAndUpdate(id, { isActive: false });
        res.send('updateIsActiveBid');

    }
    catch (error) {
        next(error);
    }
}
module.exports = { CreateBid, DeleteBidById, getbidsByOrder, updatBidsById, getTrueBids, updateIsActiveBid, getbidsByBusiness, setShowBids }

