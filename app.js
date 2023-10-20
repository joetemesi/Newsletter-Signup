const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.listen(port, function(){
    console.log("Server started on Port: " + port);
})

app.get("/", function(req, res){
    res.sendFile(__dirname+ "/signup.html");
})

app.post("/", function(req, res){
    var firstName1 = req.body.firstName;
    var lastName1 = req.body.lastName;
    var email1 = req.body.email;

    console.log(firstName1);
    console.log(lastName1);
    console.log(email1);



})