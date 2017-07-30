var mongoose = require('mongoose');

// Book Schema (required for the application)
var bookSchema = mongoose.Schema({
	title:{
		type:String,
		required: true
	},
	genre:{
		type: String,
		rquired: true
	},
	description:{
		type: String,
	},
	author:{
		type: String,
		rquired: true
	},
	publisher:{
		type: String,
	},
	pages:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},
	create_date:{
		type: Date,
		default : Date.now
	}
});

// To make Book Obj accessable from anywhere else
var Book = module.exports = mongoose.model('Book',bookSchema);

// Get Books
module.exports.getBooks=function(callback,limit){
	Book.find(callback).limit(limit);
};	

// Get Book By Id
module.exports.getBookById=function(bookId,callback){
	Book.findById(bookId,callback);
};	

// Add Book
module.exports.addBook=function(book,callback){
	
	Book.create(book,callback);
};

// Update Book
module.exports.updateBook=function(id,newBook,options,callback){

	var query = {_id:id};
	var update = {
		title : newBook.title,
		genre : newBook.genre,
		description : newBook.description,
		author : newBook.author,
		publisher : newBook.publisher,
		pages : newBook.pages,
		image_url : newBook.image_url,
		buy_url : newBook.buy_url
	}

	Book.findOneAndUpdate(query,update,options,callback);
};	

// Delete Book
module.exports.removeBook=function(id,callback){

	var query = {_id:id};
	
	Book.remove(query,callback);
};	