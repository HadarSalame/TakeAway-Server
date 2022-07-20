const router=require('express').Router()
const bidsController =require('../Controllers/bidsController')

router.post('/Createbid',bidsController.CreateBid);
router.delete('/deleteBid/:id', bidsController.DeleteBidById);
router.get('/getbidsByOrder/:order',bidsController.getbidsByOrder)


module.exports=router
