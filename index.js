var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
 fs.readFile('사용자 지정 이름.html', function (error, data) {
 res.writeHead(200, { 'Content-Type': 'text/html' });
 res.end(data);
 });
});
app.listen(포트, function () {
 console.log('Load HTML');
});
