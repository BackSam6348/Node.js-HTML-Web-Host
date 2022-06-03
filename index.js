var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
 fs.readFile('#Your HTML File name.html', function (error, data) {
 res.writeHead(200, { 'Content-Type': 'text/html' });
 res.end(data);
 });
});
app.listen(#Your Custom Port Number, function () {
 console.log('Load HTML');
});
