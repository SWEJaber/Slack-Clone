// 3rd party module from npm
const express = require('express');
const app = express();
const socketIO = require('socket.io');

const expressServer = app.listen(9000);

const io = socketIO(expressServer, 
{
    cors: 
    {
        origin: "http://localhost:3000" 
    }
});

// This is the entire socket server
io.on('connection', socket =>
{
    socket.emit('welcome', 'Welcome to the server.')
})