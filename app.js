var express = require('express');
// Object to represent our Express App
var app = express();
var bodyParser = require('body-parser');

// Middleware to the Body-Parser
app.use(bodyParser.json());

var mongoose = require("mongoose");

// Include Genres file
Genre = require("./models/genre");

// Include Books file
Book = require("./models/book");

// *******************
// Connect to Mongoose
// *******************
mongoose.connect('mongodb://localhost/bookstore');
 // Database object
var db = mongoose.connection;

// ************************************
// Setting up Routes to handle requests
// ************************************

// Route for '/' (home page)
app.get('/',function(req,res){
	res.send("Please use /api/books (or) /api/gengres");
});

// Route for '/api/genres'
app.get('/api/genres',function(req,res){
	Genre.getGenres(function(err,genres){
		if(err){
			throw err;
		}

		// Data is sent as JSON response
		res.json(genres);
	});
});

// Route for '/api/genres/:_id' (get Genre by Id)
app.get('/api/genres/:_id',function(req,res){
	var genreId = req.params._id
	Book.getGenreById(genreId,function(err,book){
		if(err){
			throw err;
		}

		// Data is sent as JSON response
		res.json(book);
	});
});


// Route for '/api/genres' (POST method, to add a Genre)
app.post('/api/genres',function(req,res){
	var genre = req.body;
	
	Genre.addGenre(genre,function(err,genre){
		if(err){
			throw err;
		}

		// Data is sent as JSON response
		res.json(genre);
	});
});

// Route for '/api/genres/_id' (PUT method, to update a Genre)
app.put('/api/genres/:_id',function(req,res){

	var id = req.params._id;
	var genre = req.body;
	
	Genre.updateGenre(id,genre,{},function(err,genre){
		if(err){
			throw err;
		}

		// Data is sent as JSON response
		res.json(genre);
	});
});

// Route for '/api/genres/_id' (DELETE method, to delete a Genre)
app.delete('/api/genres/:_id',function(req,res){

	var id = req.params._id;
	Genre.removeGenre(id,function(err,genre){
		if(err){
			throw err;
		}

		// Data is sent as JSON response
		res.json(genre);
	});
});

// ***************** Books ***********************

// Route for '/api/books'
app.get('/api/books',function(req,res){
	Book.getBooks(function(err,books){
		if(err){
			throw err;
		}

		// Data is sent as JSON response
		res.json(books);
	});
});

// Route for '/api/books/:_id' (get Book by Id)
app.get('/api/books/:_id',function(req,res){
	var bookId = req.params._id
	Book.getBookById(bookId,function(err,book){
		if(err){
			throw err;
		}

		// Data is sent as JSON response
		res.json(book);
	});
});

// Route for '/api/books' (POST method, to add a Book)
app.post('/api/books',function(req,res){
	var book = req.body;
	
	Book.addBook(book,function(err,book){
		if(err){
			throw err;
		}

		// Data is sent as JSON response
		res.json(book);
	});
});

// Route for '/api/books/_id' (PUT method, to update a Book)
app.put('/api/books/:_id',function(req,res){

	var id = req.params._id;
	var book = req.body;
		
	Book.updateBook(id,book,{},function(err,book){
		if(err){
			throw err;
		}

		// Data is sent as JSON response
		res.json(book);
	});
});

// Route for '/api/books/_id' (DELETE method, to delete a Book)
app.delete('/api/books/:_id',function(req,res){

	var id = req.params._id;
		
	Book.removeBook(id,function(err,book){
		if(err){
			throw err;
		}

		// Data is sent as JSON response
		res.json(book);
	});
});



// ************************
// Tell app where to listen
// ************************
app.listen(3000);
console.log("Server Runningg On Port 3000");