var express = require('express');
var app = express();
bodyParser = require('body-parser');
//var projects = require("./projects.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require("./routes/projectsRoutes.js");
routes(app);
app.get('/', function(req, res) {
    res.send('Hello Express');
});
 
app.listen(3000, function() {
 console.log("Server is running at 3000 port!");
});