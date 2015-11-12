'user strict';
var express = require('express');
var router = express.Router();

var BeersList = require('../model/beers-memory');
var beerlist = new BeersList();
router.get('/*', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    next();
});

router.get('/beer', function (req, res, next) {
    res.send(beerlist.getList());
});

router.get('/beer/:id', function (req, res) {
    res.json(beerlist.get(req.params.id));
});

module.exports = router;