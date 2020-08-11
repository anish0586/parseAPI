"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var parse_1 = require("./lib/parse");
var app = express();
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send('Welcome!!!');
});
//v2 parse endpoint
app.post('/api/v2/parse', function (req, res) {
    var data = req.body && req.body.data;
    if (data) {
        var parse = new parse_1.Parse();
        res.send(parse.v2Parse(data));
    }
    else {
        res.status(400).send('payload missing');
    }
});
//v1 parse endpoint
app.post('/api/v1/parse', function (req, res) {
    var data = req.body && req.body.data;
    if (data) {
        var parse = new parse_1.Parse();
        res.send(parse.v1Parse(data));
    }
    else {
        res.status(400).send('payload missing');
    }
});
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
module.exports = app;
