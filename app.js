const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

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

    // console.log(firstName1);
    // console.log(lastName1);
    // console.log(email1);

    var data = {
       members: [
        {
            email_address: email1,
            status:"subscribed",
            merge_fields: {
                FNAME: firstName1,
                LNAME: lastName1
            }

        }
       ]
    };

   const jsonData = JSON.stringify(data);
   const url = "";
   const options = {
    method: "POST",
    auth: ""
   }

   const request = https.request(url, options, function(response) {
    let data = '';

    response.on("data", function(chunk) {
        data += chunk;
    });

    response.on("end", function() {
        try {
            const jsonData = JSON.parse(data);
            console.log(jsonData);
        } catch (error) {
            console.error("Error parsing JSON data:", error);
        }
    });
});

request.on("error", function(error) {
    console.error("Error in API request:", error);
});

request.write(jsonData);
request.end();

})