# Promises

Let's use Q :[https://www.npmjs.com/package/q](https://www.npmjs.com/package/q) for reading this json file.

    $ npm install q --save

In `beers-memory.js` : 

    var Q = require('q');
    [...]
    this.readFileAsync = function (path, action) {
        Q.nfcall(fs.readFile, path).then(function (content) {
            [...]
        });
    };
    
    [...]
    
    this.readFileAsync(this.path, function(data) {
        this.beerList = data;
    }.bind(this));
    console.log(this.beerList) // it's empty, why????
    
Lets look at the console output

    $ nodemon app.js 
         - [nodemon] v1.3.7
         - [nodemon] to restart at any time, enter `rs`
         - [nodemon] watching: *.*
         - [nodemon] starting `node app.js`
    [] // it's empty, why????
    Example app listening at http://localhost:3000

Go to [http://localhost:3000/api/beer/](http://localhost:3000/api/beer/), you have your beers

Think about, why? 

That's all folks !