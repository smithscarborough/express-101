const http = require('http');
const express = require('express'); //imports express

const hostname = '127.0.0.1' //this always represents your local computer's IP address
const port = 3000;

const app = express();

const server = http.createServer(app) //basically tells express to listen to all requests that come to the server.

//This is the basic layout you will use for every route you create with express:
app.get('/', (req, res) => {
//Here is where you put what to do when the request is received:
    res.send('Hello World') //Whatever you put in these () is what is sent back to the user.
})

//Here is another route:
app.get('/cats', (req, res) => {
    res.send('Meow!');
})

app.get('/dogs', (req, res) => {
    res.send('Woof!');
})

app.get('/cats_and_dogs', (req, res) => {
    res.send('Dogs and cats living together...mass hysteria!!');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})