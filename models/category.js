var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
	categoryName: String,
});

var Category = mongoose.model('Category', categorySchema);
module.exports = Category;