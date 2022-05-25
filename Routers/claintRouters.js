const router=require('express').Router()
const claintController=require('../Controllers/claintController')

router.post('/CreateClaint',claintController.CreateClaint);
router.get('/claintLogin/:name/:pass',claintController,claintLogin);
router.get('/claintLogin/:name/:pass',claintController,claintLogin);
router.get('/UpdateClaintName/:name',claintController,UpdateClaintName);
router.get('/UpdateClaintLastName/:Lname',claintController,UpdateClaintLastName);
router.get('/UpdateClaintPhone/:phone',claintController,UpdateClaintPhone);


module.exports=router
