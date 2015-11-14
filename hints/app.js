var express = require('express');
var fs = require('fs');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use('/api', api);
app.get('/', function (req, res) {
    fs.readFile('assets/beers.json', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        var tagline = 'Our beer collection';
        res.render('pages/index', {
            drinks: JSON.parse(data),
            tagline: tagline
        });
    });
});

app.get('/about', function (req, res) {
    res.render('pages/about');
});
var server = app.listen(3000, function () {
    console.log('Example app listening at http://localhost:3000');
});
