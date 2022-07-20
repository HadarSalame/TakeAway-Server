const router=require('express').Router()
const OrderController =require('../Controllers/OrderController')

router.post('/CreateOrder',OrderController.CreateOrder);
router.delete('/deleteOrder/:id',OrderController.DeleteOrderById);
router.get('/getOrders',OrderController.getOrders);





module.exports=router
