const express = require('express');

const app = express();

const port = 3000;

app.get("/", (request, response) =>{
    response.sendFile(__dirname +"/views/index.html");
});

app.get("/login", (request, response) =>{
    response.sendFile(__dirname +"/views/login.html");
});

app.get("/register", (request, response) =>{
    response.sendFile(__dirname +"/views/register.html");
});

app.listen(port, ()=>{
    console.log("listen on port: " + port);
});
