const express   = require('express');
const app = express()
const port      = process.env.PORT || 5000;

const session    = require('express-session')
const mongoose   = require('mongoose');

var   bodyParser = require('body-parser')



var orders_router = require("./routes/orders_route")



app.use(bodyParser.json)

const uri = "mongodb://localhost:27017/urielsaludintegralStore";


mongoose.connect(uri,
    {useNewUrlParser: true , useUnifiedTopology: true })
    .then(()=> { console.log('Mongo Database connected'); })
    .catch((error)=> { console.log('Error connecting to database'); });









app.get("/orders/all",orders_router);
// create a GET route
app.get("/", (req, res) => {
    console.log("TEST")
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});


// console.log that your server is up and running
app.listen(port, ()=> console.log(`Listening on port ${port}`));


