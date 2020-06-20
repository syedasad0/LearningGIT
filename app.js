const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    console.log("Welcome to Chandigarh");
    console.log('Hi');
});



 
app.listen(3000);
console.log("Server Listening at 3000");