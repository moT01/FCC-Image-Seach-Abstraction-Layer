//Dependencies
var express = require('express');

//Express
var app = express();

app.use(express.static('public'));
	
//Route
require('./api.js')(app);

//Server
var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port: " + port);
