var express = require('express');
var session = require('express-session');

//local variable declaration
var shutting_down = false;
var server = null;
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.disable("x-powered-by");
app.use(session({
    secret: "Kuj6Gf",
    key: "sessionId",
    saveUninitialized: true,
    resave: true,
    cookie: { 
        httpOnly: true,
        secure: true 
    }
}));

app.use(function (req, resp, next) {
 if(!shutting_down)
   return next();
 
 resp.setHeader('Connection', "close");
 resp.send(503, "Server is in the process of restarting");
 // Change the response to something your client is expecting:
 //   html, text, json, etc.
});

app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || '0.0.0.0');

app.get('*', function (req, res) {
   res.render('index');
});


server = app.listen(app.get('port'), app.get('host'), function () {
 
 console.log("Express server listening on port " + app.get('port'));
 
});

function cleanup () {
  shutting_down = true;
  server.close( function () {
    console.log( "Closed out remaining connections.");
    // Close db connections, other chores, etc.
    process.exit();
  });

  setTimeout( function () {
   console.error("Could not close connections in time, forcing shut down");
   process.exit(1);
  }, 30*1000);

}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);