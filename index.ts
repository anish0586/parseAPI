import express = require('express');
import bodyParser = require('body-parser');
import { Parse } from './lib/parse';

const app: express.Application = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Welcome!!!');
});

//v2 parse endpoint
app.post('/api/v2/parse', function (req, res) {
    let data = req.body && req.body.data;
    if (data) {
        let parse = new Parse();
        res.send(parse.v2Parse(data));
    } else {
        res.status(400).send('payload missing');
    }    
});

//v1 parse endpoint
app.post('/api/v1/parse', function (req, res) {    
    let data = req.body && req.body.data;

    if (data) {
        let parse = new Parse();
        res.send(parse.v1Parse(data));
    } else {
        res.status(400).send('payload missing');
    }    
});

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});

module.exports = app;