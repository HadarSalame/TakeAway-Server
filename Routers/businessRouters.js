const router=require('express').Router()
const businessController =require('../Controllers/businessController')

router.post('/CreateBusiness',businessController.CreateBusiness);
router.delete('/deleteBusiness/:id', businessController.DeleteBusinessyId);
router.get('/getBusiness',businessController.getBusiness)
router.get('/getBusinessByEmail/:email',businessController.getBusinessByEmail)

router.get('/BusinessLogin/:businessEmail/:businesspassword',businessController.BusinessLogin);
router.get('/UpdatebusinessName/:name',businessController.UpdatebusinessName);
router.get('/UpdatebusinessOwnerName',businessController.UpdatebusinessOwnerName);
router.get('/UpdatebusinessPhone',businessController.UpdatebusinessPhone);
router.get('/UpdatebusinessPassword',businessController.UpdatebusinessPassword);
router.get('/UpdatebusinessAddress',businessController.UpdatebusinessAddress);
router.get('/UpdatebusinessEmail',businessController.UpdatebusinessEmail);



module.exports=router
