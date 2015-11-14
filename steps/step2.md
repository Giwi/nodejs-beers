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

Well, you can be more hipster by modifying the `package.json` file, especially th "scripts" section by adding : 
    
    "app": "node app.js"
    
now, you can just type 
    
    $ npm run app

## Templating

### The basics 

There's many tamplate engines for Express (like [Jade](http://jade-lang.com/)), but we'll use EJS.

    $ npm install ejs --save

Create files and folders :

    - views
    ----- partials
    ---------- footer.ejs
    ---------- head.ejs
    ---------- header.ejs
    ----- pages
    ---------- index.ejs
    ---------- about.ejs
    
Add in your `app.js` 

    app.set('view engine', 'ejs');
    [...]
    app.get('/', function(req, res) {
        res.render('pages/index');
    });
    
Now the `/` path will be mapped to our index page. Do the same for the about page on another path (like `/about`)

Notice how we send a view to the user by using `res.render()`. It is important to note that `res.render()` will look in 
a `views` folder for the view. So we only have to define `pages/index` since the full path is `views/pages/index`.

As a CSS framework, we'll use [Bootstrap](http://getbootstrap.com/).

Edit `head.ejs` :

    <!-- views/partials/head.ejs -->    
    <meta charset="UTF-8">
    <title>Super Awesome</title>    
    <!-- CSS (load bootstrap from a CDN) -->
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

Edit `header.ejs` :

    <!-- views/partials/header.ejs -->    
    <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">    
            <div class="navbar-header">
                <a class="navbar-brand" href="#">
                    <span class="glyphicon glyphicon glyphicon-tree-deciduous"></span>
                    EJS Is Fun
                </a>
            </div>    
            <ul class="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>          
        </div>
    </nav>

Edit `footer.ejs` :

    <!-- views/partials/footer.ejs -->    
    <p class="text-center text-muted">© Copyright 2015, geeks rulez the world</p>

It's just plain HTML. okay, let's implements the main page using the EJS template Engine

Edit `index.ejs` :

    <!-- views/pages/index.ejs -->    
    <!DOCTYPE html>
    <head>
        <% include ../partials/head %>
    </head>
    <body class="container">    
        <header>
            <% include ../partials/header %>
        </header>    
        <main>
            <div class="jumbotron">
                <h1>This is great</h1>
                <p>Welcome to templating using EJS</p>
            </div>
        </main>    
        <footer>
            <% include ../partials/footer %>
        </footer>        
    </body>
    </html>

Edit `about.ejs` : 

    <!-- views/pages/about.ejs -->    
    <!DOCTYPE html>
    <head>
        <% include ../partials/head %>
    </head>
    <body class="container">    
        <header>
            <% include ../partials/header %>
        </header>    
        <main>
            <div class="row">
                <div class="col-sm-8">                
                   <h1>About</h1>                    
                </div>
                <div class="col-sm-4">                    
                    <div class="well">
                        <h3>Look I'm A Sidebar!</h3>
                    </div>    
                </div>
            </div>
        </main>    
        <footer>
            <% include ../partials/footer %>
        </footer>        
    </body>
    </html>


Hey we've included our fragments with `<% include path/to/my/fragment %>` (witout the ejs file's extension)

Go to [http://localhost:3000/](http://localhost:3000/) 

If all is ok, proceed to [step 3](step3.md)