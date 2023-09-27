// 3rd party module from npm
const express = require('express');
const app = express();
const socketIO = require('socket.io');
const namespaces = require('./data/namespaces');

const expressServer = app.listen(9000);

const io = socketIO(expressServer, 
{
    cors: 
    {
        origin: "http://localhost:3000" 
    }
});

// This is the entire socket server
io.of("/").on('connection', socket =>
// io.on('connection', socket =>
{
    socket.emit('welcome', 'Welcome to the server.')

    socket.on("clientConnect", data => {
        console.log(socket.id, ' has connected');
    })

    socket.emit('nsList', namespaces)
})


io.of("/admin").on('connection', socket => 
{
    console.log(socket.id, " has joined admin!");

    io.of("/admin").emit("messageToClientsFromAdmin", {})
})
