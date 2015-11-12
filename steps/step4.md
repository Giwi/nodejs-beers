# In memory CRUD

## getList

Let's create a beer "class". Create a `model/beers-memory.js` file with something like : 

    'use strict';
    var fs = require('fs');
    
    function BeersList() {
        this.path = 'assets/beers.json'
        this.beerList = [];
        this.init = function() {
            var beerList = [];
            fs.readFile(this.path, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                JSON.parse(data).forEach(function(b) {
                    this.push(b);
                }, beerList);
            });
            this.beerList = beerList;
        };
        
        this.getList = function() {
            return this.beerList;
        };
    }
    
    exports = module.exports = BeersList;
    
and modify `api.js`

    var BeersList = require('../model/beers-memory');
    var beerlist = new BeersList();
    beerlist.init();
    
    [...]
    
    router.get('/beer', function (req, res, next) {
            res.send(beerlist.getList());
    });
    
Go to [http://localhost:3000/api/beer/](http://localhost:3000/api/beer/) everything must be fine ^^

## The CRUD

Ok, now you have implemented the **get** method to retrieve the beers, now you can implement : 

- GET /beer (Retrieves a list of beers)
- GET /beer/12 (Retrieves a specific beer)
- POST /beer (Creates a new beer)
- PUT /beer/12 (Updates beer #12)
- DELETE /beer/12 (Deletes beer #12)
   
Well, the first item is done, but here's a hint for the second : 

    router.get('/beer/:id', function (req, res) {
        res.json(beerlist.get(req.params.id));
    });
        
and

    this.get = function(id) {
        var beer = {}
        this.beerList.forEach(function(b) {
            if(b.id === id) {
                beer = b;
            }
        });
        return beer;
    };
    
It's up to you, and remember Google is your friend and beware of stackOverflow ;)