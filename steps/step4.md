# Static content

Hey take a look at  [http://expressjs.com/starter/static-files.html](http://expressjs.com/starter/static-files.html) 
and try to serve static content from the static folder. Try to have another thing than a 404 error :  
[http://localhost:3000/beers/img/StBernardusTripel.jpg](http://localhost:3000/beers/img/StBernardusTripel.jpg)

Good luck !

Now you can put your Polymer project in the "static" folder ;)
 
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

