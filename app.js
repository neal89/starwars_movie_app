var express = require('express');

// app is a new express application 
var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname,'public')));

// Routes - specify routes for an application

// Home Route
app.get('/', routes.home);

// movie_single
app.get('/starwars_episode/:episode_number?', routes.movie_single);

// not found
app.get('*', routes.notFound);

/*
app.listen(3000, function() {
	console.log("The application is running on localhost 3000");
})
*/

app.listen(process.env.PORT || 3000);
