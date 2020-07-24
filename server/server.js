const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');


const publicpath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3001
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicpath));
io.on('connection',(socket)=>{
    console.log('A new user just connected');

    socket.on('disconnect',()=>{
        console.log('User was disconnected from the server')
    })
})


server.listen(3001,()=>console.log(`server connected on port ${port}`));
console.log(publicpath);