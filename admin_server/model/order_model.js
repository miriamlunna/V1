const   mongoose = require('mongoose');
const Schema = mongoose.Schema;

const order = new Schema ({

    orderNumber                 :{ type: Number, ref: 'Order' },
    userEmail                   :{type:  String,index: true },
    userPhone                   :{type:  Number },
    lens                        :{type:  String, required: true , max: 20},
    qualityLens                 :{type:  String, required: true , max: 10},
    lensColor                   :{type:  String , max: 20},
    typeEyewear                 :{type:  String, required: true , max: 50},
    prescription                :{type:  String},
    address                     :{type:  String, required: true },
    price                       :{type:  String, required: true },
    paymentId                   :{type:  String, required: true,index:true },
    paymentMethod               :{type:  String, required:true},
    order_received              :{type:  Boolean},
    order_received_dateTime     :{type:  Date,},
    order_attended              :{type:  Boolean},
    order_attended_dateTime     :{type:  Date},
    order_shipped               :{type:  Boolean,},
    order_shipped_dateTime      :{type:  Date},
    order_deliveried            :{type:  Boolean},
    order_deliveried_dateTime   :{type:  Date},
    client_rate                 :{type:  Number},
    client_comments             :{type:  String}

})


module.exports = mongoose.model('Order', order);