const router=require('express').Router()
const categoryController =require('../Controllers/categoryController')

router.post('/CreateCategory',categoryController.CreateCategory);
// router.get('/BusinessLogin',businessController.BusinessLogin);
// router.get('/UpdatebusinessName/:name',businessController.UpdatebusinessName);
// router.get('/UpdatebusinessOwnerName',businessController.UpdatebusinessOwnerName);
// router.get('/UpdatebusinessPhone',businessController.UpdatebusinessPhone);
// router.get('/UpdatebusinessPassword',businessController.UpdatebusinessPassword);
// router.get('/UpdatebusinessAddress',businessController.UpdatebusinessAddress);
// router.get('/UpdatebusinessEmail',businessController.UpdatebusinessEmail);



module.exports=router
