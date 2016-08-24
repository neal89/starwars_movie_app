<<<<<<< HEAD
var moviesJSON = require('../movies.json');
// Home Route
exports.home = function(req, res) {
	//res.send("<h3>This is a server response on the home page</h3>");
	var movies = moviesJSON.movies;


	res.render('home', {
		title : "Star Wars Movies Homepage",
		movies : movies,
	});
};

// movie_single
exports.movie_single =  function(req, res){
	var episode_number = req.params.episode_number;

	var movies = moviesJSON.movies;

	if(episode_number>=1 && episode_number<=6) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		res.render('movie_single', {
			movies : movies,
			title : title,
			movie : movie,
			main_characters : main_characters
		});
	} else {

		res.render('notFound', {
			movies : movies,
			title : "This is not the page you are looking for",
		});
	}
	
};

// not found
exports.notFound =  function(req, res){

	var movies = moviesJSON.movies;

	res.render('notFound', {
			movies : movies,
			title : "This is not the page you are looking for",
		});

	// res.send("This is not the page that you are looking for");

};
=======
var moviesJSON = require('../movies.json');
// Home Route
exports.home = function(req, res) {
	//res.send("<h3>This is a server response on the home page</h3>");
	var movies = moviesJSON.movies;


	res.render('home', {
		title : "Star Wars Movies Homepage",
		movies : movies,
	});
};

// movie_single
exports.movie_single =  function(req, res){
	var episode_number = req.params.episode_number;

	var movies = moviesJSON.movies;

	if(episode_number>=1 && episode_number<=6) {

		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

		res.render('movie_single', {
			movies : movies,
			title : title,
			movie : movie,
			main_characters : main_characters
		});
	} else {

		res.render('notFound', {
			movies : movies,
			title : "This is not the page you are looking for",
		});
	}
	
};

// not found
exports.notFound =  function(req, res){

	var movies = moviesJSON.movies;

	res.render('notFound', {
			movies : movies,
			title : "This is not the page you are looking for",
		});

	// res.send("This is not the page that you are looking for");

};
>>>>>>> 7f154f84411db46db015b05743e64177f195afce
