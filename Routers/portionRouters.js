const router=require('express').Router()
const portionController =require('../Controllers/portionController')

router.post('/CreatePortion',portionController.CreatePortion);
router.get('/getPortion',portionController.getPortion);

// router.get('/BusinessLogin',businessController.BusinessLogin);
// router.get('/UpdatebusinessName/:name',businessController.UpdatebusinessName);
// router.get('/UpdatebusinessOwnerName',businessController.UpdatebusinessOwnerName);
// router.get('/UpdatebusinessPhone',businessController.UpdatebusinessPhone);
// router.get('/UpdatebusinessPassword',businessController.UpdatebusinessPassword);
// router.get('/UpdatebusinessAddress',businessController.UpdatebusinessAddress);
// router.get('/UpdatebusinessEmail',businessController.UpdatebusinessEmail);



module.exports=router
