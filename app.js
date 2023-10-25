const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function () {
    console.log("Server started on Port: " + port);
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) { // home route
    var firstName1 = req.body.firstName;
    var lastName1 = req.body.lastName;
    var email1 = req.body.email;

    var data = {
        members: [
            {
                email_address: email1,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName1,
                    LNAME: lastName1,
                },
            },
        ],
    };

    const jsonData = JSON.stringify(data);
    const url = process.env.MAILCHIMP_URL;
    const options = {
        method: "POST",
        auth: process.env.MAILCHIMP_AUTH
    };

    const request = https.request(url, options, function (response) { //send request to api
        let responseData = ''; // Rename the variable to avoid conflict

        response.on("data", function (chunk) {
            responseData += chunk;
        });

        response.on("end", function () {
            try {
                const jsonDataResponse = JSON.parse(responseData); // Rename the variable
                console.log(jsonDataResponse);

                if (response.statusCode === 200 && jsonDataResponse.errors.length === 0) {
                    res.sendFile(__dirname + "/success.html");
                } else {
                    res.sendFile(__dirname + "/failure.html");
                }
            } catch (error) {
                console.error("Error parsing JSON data:", error);
                res.sendFile(__dirname + "/failure.html");
            }
        });
    });

    request.on("error", function (error) {
        console.error("Error in API request:", error);
    });

    app.post("/failure", function(req, res){ //failure route
        res.redirect("/"); // redirect to homepage
    })

    request.write(jsonData);
    request.end();
});
