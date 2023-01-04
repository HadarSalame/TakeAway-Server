const router = require('express').Router()
const claintController = require('../Controllers/claintController')

router.post('/CreateClaint', claintController.CreateClaint);
router.delete('/DeleteClaintById/:id', claintController.DeleteClaintById);
router.get('/getClaint', claintController.getClaint);
router.get('/getClaintByEmail/:email', claintController.getClaintByEmail);


router.get('/claintLogin/:claintEmail/:password', claintController.claintLogin);
router.put('/UpdateClaint/:id', claintController.UpdateClaint);



module.exports = router