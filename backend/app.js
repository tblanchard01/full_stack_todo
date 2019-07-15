var express = require("express");
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();
var cors = require('cors')
var db = require('./config/db');
var port = 8000; 
app.use(bodyParser.json());
app.use(cors()); 
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(db.url, { useNewUrlParser: true }, (err, db) => {
    if(err) return console.log(err); 
    routes(app, db);
    app.listen(port, function () {
        console.log("app running on " + port); 
    });  
});






