const router=require('express').Router()
const bidsController =require('../Controllers/bidsController')

router.post('/Createbid',bidsController.CreateBid);
router.delete('/deleteBid/:id', bidsController.DeleteBidById);
router.get('/getbidsByOrder/:order',bidsController.getbidsByOrder)
router.put('/updatBidsById/:id',bidsController.updatBidsById)
router.get('/getTrueBids/:status',bidsController.getTrueBids)
router.get('/getbidsByBusiness/:business',bidsController.getbidsByBusiness)



module.exports=router
