var mongoose=require('mongoose');

//Generate Schema
var genreSchema=mongoose.Schema({
	name:{
		type:String,
		required:true

	},
	create_date:{
		type:Date,
		default:Date.now
	}
});
var Genre=module.exports = mongoose.model('Genre',genreSchema);

//Get Genres
module.exports.getGenres=function(callback,limit){
	Genre.find(callback).limit(limit);
}

//add Genre
module.exports.addGenre=function(genre,callback){
	Genre.create(genre,callback);
}

//update Genre
module.exports.updateGenre=function(id,genre,option,callback){
	var query={_id:id};
	var update={
		name:genre.name
	}
	Genre.findOneAndUpdate(query,update,option,callback);
}

//delete Genre
module.exports.deleteGenre=function(id,callback){
	var query={_id:id};
	Genre.remove(query,callback);
}