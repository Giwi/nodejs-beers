var express = require('express');
var api = require('./routes/api');
var app = express();

app.use('/api', api);
app.use(express.static('static'));

var server = app.listen(3000, function () {
    console.log('Example app listening at http://localhost:3000');
});
