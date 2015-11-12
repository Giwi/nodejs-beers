# Express, the beginning

What is Express? It's a web framework for NodeJS [http://expressjs.com/](http://expressjs.com/)

    $ npm install express --save
    
## The tremendous Hello World

Create `app.js` in the root of your project :

    var express = require('express');
    var app = express();
    
    app.get('/', function (req, res) {
        res.send('Hello World!');
    });
    
    var server = app.listen(3000, function () {
        console.log('Example app listening at http://localhost:3000');
    });

Run :

    $ node app.js

Go to [http://localhost:3000/](http://localhost:3000/)

That's it ;)

## Basic Routing

Now do a CTRL+C to stop node

Create `routes/api.js` with : 

    'user strict';
    var express = require('express');
    var router = express.Router();
    router.get('/*', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        next();
    });
    
    router.get('/beer', function (req, res, next) {
        var beers = [{
            "alcohol": 6.8,
            "description": "Affligem Blonde, the classic clear blonde abbey ale, with a gentle roundness and 6.8% alcohol. Low on bitterness, it is eminently drinkable."
            ,
            "id": "AffligemBlond",
            "img": "img/AffligemBlond.jpg",
            "name": "Affligem Blond"
        }];
    
        res.send(beers);
    });
    
    module.exports = router;
    
and modify app.js : 

    var express = require('express');
    var api = require('./routes/api');
    var app = express();
    
    app.use('/api', api);
    
    app.get('/', function (req, res) {
        res.send('Hello World!');
    });
    
    var server = app.listen(3000, function () {
        console.log('Example app listening at http://localhost:3000');
    });
    
run 

    $ node app.js
    
Go to [http://localhost:3000/api/beer/](http://localhost:3000/api/beer/)

## Lets read a file

Now do a CTRL+C to stop node

Download `assets/beers.json` and place it in your project's folder : `assets/beers.json` 

add in `api.js` : `var fs = require('fs');`
and modify the "beerlist" router :
 
    fs.readFile('assets/beers.json', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        res.send(data);
    });
    
run 

    $ node app.js
    
Go to [http://localhost:3000/api/beer/](http://localhost:3000/api/beer/)

## Now do a CTRL+C to stop node

Ok, it is'nt fun to stop node between each coding session : 

    $ npm install nodemon --save-dev
    $ nodemon app.js
    
Modify your code, save and the node serve reloads automatically.
 
 