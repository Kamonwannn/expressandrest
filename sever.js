var express = require('express');
var app = express();
var db = require('./database')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('<h1 align="center" style="color:blue;padding:30%;">WELCOME <h1>');
    });


app.get('/api/Suppliers',db.getAllsuppliers);



//port server
var port = process.env.PORT || 8080;
app.listen(port, function () {
console.log('App is running on http://localhost:' + port);
});

