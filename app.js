//var LOGGER = require('./api/logger.js');
//var Calculator = require("./api/calculator.js")
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');

var app =  express();
var port = 3030

var appRouter = express.Router();
app.use('/api',appRouter);

app.use(express.static(path.join(__dirname, '/api')));
app.use(express.static(path.join(__dirname, '/node_modules')));

app.use(bodyParser.json());

appRouter.route("/add").get(function(req,res){
    //LOGGER.info("in addiiton api call")
    res.json("te212")
})

appRouter.route("/subtract").get(function(req,res){
    //LOGGER.info("in subtraction api call")
    res.json("test")
})

app.listen(port, function(err) {
    console.log("running server on from gulp port:::::::" + port);
});