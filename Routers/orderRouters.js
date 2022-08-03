const router=require('express').Router()
const OrderController =require('../Controllers/OrderController')

router.post('/CreateOrder',OrderController.CreateOrder);
router.delete('/deleteOrder/:id',OrderController.DeleteOrderById);
router.get('/getOrders',OrderController.getOrders);
router.get('/getOrdersFalse',OrderController.getOrdersFalse);//שליפת כול ההזמנות שעדיין לא נענו
router.get('/getOrderById/:id',OrderController.getOrderById);





module.exports=router
