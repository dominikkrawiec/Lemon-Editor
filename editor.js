var express = require('express');
var ejs = require('ejs');
var docCont = require("./controllers/documentController");

//var bindEvents = require('./controllers/bindEvents');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('./assets'));
docCont(app);
app.listen(3000);
