# Creating a NodeJS project

## Node installation

### On your own computer

[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

For Ubuntu :
 
    $ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
    $ sudo apt-get install -y nodejs  
    $ sudo apt-get install -y build-essential

### On your computer 

    $ cd

create a `.wgetrc` file in your home : 

    http_proxy = http://votre_proxy:port_proxy/
    proxy_user = votre_user_proxy
    proxy_password = votre_mot_de_passe
    use_proxy = on
    wait = 15

then
    
    $ wget -X https://nodejs.org/dist/v4.2.2/node-v4.2.2-linux-x64.tar.gz
    $ tar -xvf node-v4.2.2-linux-x64.tar.gz

    $ echo "alias node=~/node-v4.2.2-linux-x64/bin/node" >> .bashrc
    $ echo "alias npm=~/node-v4.2.2-linux-x64/bin/npm" >> .bashrc
    $ source .bashrc

## Configuration

Test with : 

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
    
And finaly it produces `package.json` (look at it to understand what it is)
 
If all is ok, proceed to [step 2](step2.md)