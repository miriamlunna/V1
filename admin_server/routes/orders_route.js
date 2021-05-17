var express = require('express');
var router  = express.Router();

const allOrders = require("../controller/orders")




router.get("/orders/all"  ,allOrders.allOrders);


module.exports = router;
