const router=require('express').Router()
const claintController=require('../Controllers/claintController')

router.post('/CreateClaint',claintController.CreateClaint);
router.delete('/deletclaint/:id', claintController.DeleteClaintById);
router.get('/getClaint', claintController.getClaint);
router.get('/getClaintByEmail/:email', claintController.getClaintByEmail);


router.get('/claintLogin/:email/:pass',claintController.claintLogin);
router.get('/UpdateClaintName/:name',claintController.UpdateClaintName);
router.get('/UpdateClaintLastName/:Lname',claintController.UpdateClaintLastName);
router.get('/UpdateClaintPhone/:phone',claintController.UpdateClaintPhone);
router.get('/UpdateClaintEmail/:email',claintController.UpdateClaintEmail);
router.get('/UpdateClaintPassword/:pass',claintController.UpdateClaintPassword);


module.exports=router