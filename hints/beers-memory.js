'use strict';
var fs = require('fs');
var Q = require('q');

function BeersList() {
    this.path = 'assets/beers.json'
    this.beerList = [];

    this.readFileAsync = function (path, action) {
        Q.nfcall(fs.readFile, path)
            .then(function (content) {
                var data = JSON.parse(content);

                var beerList = [];
                data.forEach(function (b) {
                    this.push(b);
                }, beerList);
                action(beerList);
            });
    };

    this.getList = function () {
        return this.beerList;
    };

    this.get = function (id) {
        var beer = {}
        this.beerList.forEach(function (b) {
            if (b.id === id) {
                beer = b;
            }
        });
        return beer;
    };

    this.readFileAsync(this.path, function(data) {
        this.beerList = data;
    }.bind(this));
    console.log(this.beerList);
}


exports = module.exports = BeersList;