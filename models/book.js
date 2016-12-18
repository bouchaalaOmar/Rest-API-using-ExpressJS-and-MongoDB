var mongoose=require('mongoose');

//Generate Schema
var genreSchema=mongoose.Schema({
	title:{
		type:String,
		required:true
	},
	genre:{
		type:String,
		required:true
	},
	description:{
		type:String,
		required:true
	},
	author:{
		type:String,
		required:true
	},
	publisher:{
		type:String,
		required:true
	},
	image_url:{
		type:String,
		required:true
	},
	create_date:{
		type:Date,
		default:Date.now
	}
});
var Book=module.exports = mongoose.model('Book',genreSchema);

//Get Books
module.exports.getBooks=function(callback,limit){
	Book.find(callback).limit(limit);
}

//Get Books By Id
module.exports.getBookById=function(id,callback){
	Book.findById(id,callback);
}

//add Book
module.exports.addBook=function(book,callback){
	Book.create(book,callback);
}