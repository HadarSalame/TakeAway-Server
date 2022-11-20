const express = require('express');
const App = express();
const env = require('dotenv');
env.config();
const path = require("path")
const cors =require("cors")
// App.use(cors) 


App.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const bodyParser = require("body-parser")
App.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://finallProject:finallProject@takeawaycluster.4tc2n.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("connect to mongo")
}).catch(err => { console.log("myerr" + err); })

const businessRouter = require("./Routers/businessRouters")
App.use('/business', businessRouter)

const portionRouter = require("./Routers/portionRouters")
App.use('/portion', portionRouter)

const categoryRouters = require("./Routers/categoryRouters")
App.use('/category', categoryRouters)

const claintRouters = require("./Routers/claintRouters")
App.use('/claint', claintRouters)
 
const orderRouters = require("./Routers/orderRouters")
App.use('/order',orderRouters )

const bidsRouters = require("./Routers/bidsRouters")
App.use('/bid', bidsRouters)


// router

App.listen(3030, () => {
    console.log('listening on 3030')
}
)
