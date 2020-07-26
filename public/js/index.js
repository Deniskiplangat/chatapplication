let socket = io();
socket.on('connect',()=>{
    console.log('connecting to the server')

    
});


socket.on('disconnect',()=>{
    console.log('disconnected from the server')
})
socket.on('newMessage',function(message){
    console.log('newmessage',message)
})