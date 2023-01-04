const router=require('express').Router()
const businessController =require('../Controllers/businessController')

router.post('/CreateBusiness',businessController.CreateBusiness);
router.delete('/deleteBusiness/:id', businessController.DeleteBusinessyId);
router.get('/getBusiness',businessController.getBusiness)
router.get('/getBusinessByEmail/:email',businessController.getBusinessByEmail)
router.get('/BusinessLogin/:businessEmail/:businesspassword',businessController.BusinessLogin);
router.put('/UpdateBusiness/:id',businessController.UpdateBusiness);




module.exports=router
