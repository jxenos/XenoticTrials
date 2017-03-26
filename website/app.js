// Module dependencies.
var express = require('express')
    , http = require('http');

//jxenos 3/25 21:12 updating depricated code
/*
var app = express.createServer();
*/

var app = express();
var server = http.createServer(app);
//Configuration

//jxenos 3/25 21:12 updating depricated code
/*
app.configure( function(){
});
*/
var env = process.env.NODE_ENV || 'development';
if ('development' == env){
    //configure stuff here
}

// routes
app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(3000);
