var mongoose = require('mongoose');

// Genre Schema (required for the application)
var genreSchema = mongoose.Schema({
	name:{
		type:String,
		required: true
	},
	create_date:{
		type: Date,
		default : Date.now
	}
});

// To make Genre Obj accessable from anywhere else
var Genre = module.exports = mongoose.model('Genre',genreSchema);

// Get Genres
module.exports.getGenres=function(callback,limit){

	Genre.find(callback).limit(limit);
};	

// Get Book By Id
module.exports.getGenreById=function(genreId,callback){
	Genre.findById(genreId,callback);
};	

// Add Genre
module.exports.addGenre=function(genre,callback){

	Genre.create(genre,callback);
};	

// Update Genre
module.exports.updateGenre=function(id,newGenre,options,callback){

	var query = {_id:id};
	var update = {
		name : newGenre.name
	}

	Genre.findOneAndUpdate(query,update,options,callback);
};	

// Delete Genre
module.exports.removeGenre=function(id,callback){

	var query = {_id:id};
	
	Genre.remove(query,callback);
};	
