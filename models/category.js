var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
	name: String,
	usageCount: Number,
});

var Category = mongoose.model('Category', categorySchema);
module.exports = Category;