const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { getDefaultSettings } = require('http2');
// const { Socket } = require('dgram');


const publicpath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3001
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicpath));
io.on('connection',(socket)=>{
    console.log('A new user just connected');

    socket.emit('newMessage',{
        from:'Admin',
        text:'Welcome to the group chat',
        createdAt:new Date().getTime()
    })

    socket.broadcast.emit('newMessage',{
        from:'Admin',
        text:'A new user has joined',
        createdAt:new Date().getTime()
    })

   

    socket.on('createMessage',(message)=>{
         console.log('createMessage',message);
         io.emit('newMessage',{
             from:message.from,
             text:message.text,
             createdAt:new Date().getTime()
         })
      
    });

    socket.on('disconnect',()=>{
        console.log('User was disconnected from the server')
    })
})


server.listen(3001,()=>console.log(`server connected on port ${port}`));
console.log(publicpath);
