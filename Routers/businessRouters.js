const router=require('express').Router()
const businessController =require('../Controllers/businessController')

router.post('/CreateBusiness',businessController,CreateBusiness);
router.get('/BusinessLogin',businessController,BusinessLogin);
router.get('/UpdatebusinessName',businessController,UpdatebusinessName);
router.get('/UpdatebusinessOwnerName',businessController,UpdatebusinessOwnerName);
router.get('/UpdatebusinessPhone',businessController,UpdatebusinessPhone);
router.get('/UpdatebusinessPassword',businessController,UpdatebusinessPassword);
router.get('/UpdatebusinessAddress',businessController,UpdatebusinessAddress);
router.get('/UpdatebusinessEmail',businessController,UpdatebusinessEmail);



module.exports=router