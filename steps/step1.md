# Creating a NodeJS project

## Node installation

### On your own computer

[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

For Ubuntu :
 
    $ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
    $ sudo apt-get install -y nodejs  
    $ sudo apt-get install -y build-essential

### On your school computer

    $ echo "alias node=/usr/local/CAI/WEB/devtools/nodexxx/bin/node" >> .bashrc
    $ echo "alias npm=/usr/local/CAI/WEB/devtools/nodexxx/bin/npm" >> .bashrc
    $ source .bashrc

## Configuration

Test with : (whatever is the returned version number)

    $ node -v
      v4.2.2
    $ npm -v
      2.14.7

Create a project folder called `nodejs-beers` or whatever you want. In this folder, create a `.npmrc` file :

    proxy = http://username:password@proxy.enib.fr:3128
    https-proxy = http://username:password@proxy.enib.fr:3128
    strict-ssl = false
    
## Lets play with NPM

This will ask you some questions :

    $ npm init
    
And finaly it produces `package.json` (loot at it to understand what it is)
 
If all is ok, proceed to [step 2](step2.md)