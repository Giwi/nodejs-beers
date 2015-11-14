# Yeoman and the Mean stack

Let's discover [Yoeman](http://yeoman.io/) with [generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)

Don't forget to create a `.bowerrc` and a `.npmrc` with proxy settings in your project folder.

Don't choose saas, but plain CSS

If you've a packaged installation (like on your own computer) : 

    $ sudo npm install yo generator-angular-fullstack grunt-cli bower -g
    $ mkdir my-new-project && cd $_
    // You'll have to answer some embarrassing questions and wait for a while 
    $ yo angular-fullstack my-app 
    $ grunt serve

If it's your school's computer, in your home :     

    $ npm install yo generator-angular-fullstack grunt-cli bower
    $ mkdir my-new-project && cd $_
    // You'll have to answer some embarrassing questions and wait for a while 
    $ node ../node_modules/yo/lib/cli.js angular-fullstack my-app
    $ node ../node_modules/node_modules/grunt-cli/bin/grunt serve

and then, go to [http://localhost:9000/](http://localhost:9000/)

    