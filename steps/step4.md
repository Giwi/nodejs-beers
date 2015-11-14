# APIs

## Basic Routing

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
    
and modify `app.js` : 

    var api = require('./routes/api');
    [...]
    app.use('/api', api);
    [...]
    
Go to [http://localhost:3000/api/beer/](http://localhost:3000/api/beer/)

## Lets read a file

Modify `router.get('/beer'` to read `assets/beers.json`

## CORS

Oh wait, lets deal with CORS : 

    var cors = require('express-cors');
    
    [...]
    
    var allowCrossDomain = function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    }
    
    [...]
    
    app.use(cors({
        allowedOrigins: ['*']
    }));
    app.use(allowCrossDomain);
    
## Parsing requests contents

    var bodyParser = require('body-parser');
    
    [...]
    
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({
        extended: false
     }));

If all is ok, proceed to [step 5](step5.md)