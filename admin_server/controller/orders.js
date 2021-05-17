const   mongoose = require('mongoose');
const  order     = require("../model/order_model")
const  res       = require("express");

function allOrders(){

    console.log("Orders")
    order.find({ order_received:true},
        function (err, docs) {

            if (err){
                console.log(err);
            }
            else{

                console.log("Orders obtained",docs);
                res.send(docs)
                return docs
            }

        });


}

exports.allOrders = allOrders