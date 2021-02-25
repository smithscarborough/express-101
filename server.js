const http = require('http');
const express = require('express'); //imports express
const db = require('./db');

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

app.get('/friends', (req, res) => {
    let html = ''
    db.forEach(friend => {
        html += `<li>${friend.name}</li>`
    })

    res.send(html)
})

app.get('/friends/:handle', (req, res) => { //The colon on this line tells Express that this what to look for in the database file that we have.
    const foundFriend = db.find((friend) => {
        if (friend.handle === req.params.handle) {
            return true;
        } else {
            return false;
        }
        })
        if (foundFriend) {
            res.send(foundFriend.name);
        } else {
            res.status(404)
            res.send('Could not find user with that handle')
        }
})



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})