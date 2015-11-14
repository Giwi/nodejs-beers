# Going deeper

Download `assets/beers.json` and place it in your project's folder : `assets/beers.json` 

Ok, it is'nt fun to stop node between each coding session : 

    $ npm install nodemon --save-dev
    $ nodemon app.js
    
Modify your code, save and the node serve reloads automatically. (you can modify the "scripts" section of the `package.json` file) 

## Static content

Hey take a look at  [http://expressjs.com/starter/static-files.html](http://expressjs.com/starter/static-files.html) 
and try to serve static content from the static folder. Try to have another thing than a 404 error :  
[http://localhost:3000/beers/img/StBernardusTripel.jpg](http://localhost:3000/beers/img/StBernardusTripel.jpg)

Good luck !

##  Passing Data to Views
   
Let’s define some basic variables and a list to pass to our home page. Go back into your `app.js` file and add the 
following inside your `app.get('/')` route.  We'll read a file now.

    [...]
    var fs = require('fs');
    [...]
    app.get('/', function(req, res) {
        fs.readFile('../assets/beers.json', 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            var tagline = 'Our beer collection';
            res.render('pages/index', {
                drinks: data,
                tagline: tagline
            });
        });
    });
    
In your `index.ejs` add wherever you want 

    <p><%= tagline %></p>
    
and

    <div class="container">
        <ul class="list-group">
            <% drinks.forEach(function(beer) { %>
            <li class="list-group-item">
                <h1>
                    <img src="<%= beer.img %>" alt="..." class="img-thumbnail" width="100px">
                    <%= beer.name %> <span class="badge"><%= beer.alcohol %>°</span></h1>
                <blockquote>
                    <small><%= beer.description %></small>
                </blockquote>
            </li>
            <% }); %>
        </ul>
    </div>
    
Now you should meditate on what you have done.

If all is ok, proceed to [step 4](step4.md)