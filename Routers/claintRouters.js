const router=require('express').Router()
const claintController=require('../Controllers/claintController')

router.post('/CreateClaint',claintController.CreateClaint);
router.delete('/deletclaint/:id', claintController.DeleteClaintById);
router.get('/getClaint', claintController.getClaint);
router.get('/getClaintByEmail/:email', claintController.getClaintByEmail);


router.get('/claintLogin/:claintEmail/:password',claintController.claintLogin);
router.put('/UpdateClaint',claintController.UpdateClaint);



module.exports=router