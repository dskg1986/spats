var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var http = require('http');
var passport = require('passport');

// set the path for the api routes file.
var apiRoutes = require('./server/routes/api');

// create an app.
var app = express();

// log all requests to the console
app.use(morgan('dev'));

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Set public folders or file.
app.use(express.static(path.join(__dirname, 'public')));
// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// configure our app to handle CORS requests
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

require('./server/models/db');
require('./server/config/passport');

// connect to our database (hosted locally)
app.use(passport.initialize());
// Give some routes
app.use('/api', apiRoutes);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Create your node server.
const server = http.createServer(app);

// Tell the server to listen to requests
server.listen(port, () => console.log(`Running on localhost:${port}`));
// Tell the server to list errors
server.on('error', onError);
server.on('listening', onListening);

// Normalize a port into a number, string, or false.
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

// Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

var debug = require('debug')('node-rest:server');

// Event listener for HTTP server "listening" event.
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

module.exports = app;