var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./server/routes');
var favicon = require('serve-favicon');
var path = require('path');
var logger = require('morgan');

/*mongoose.connect('mongodb://localhost/expressHttp', function() {
    console.log('connected to expressHttp db.');
});*/

mongoose.connect('mongodb://julio:password@ds023105.mlab.com:23105/simple-crud', function() {
    console.log('connected to expressHttp db.');
});


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./client'));
app.use(favicon(path.join(__dirname, '/client/favicon.ico')));
app.use(logger('dev'));
app.set('port', process.env.PORT || 3700);
var port = app.get('port');



app.use('/', routes);




app.listen(port, function() {
    console.log('Listening on port 3700');
});