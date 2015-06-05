var Category = require('../models/category');

exports.add = function(req, res){
	Category.find(function(err, categories){
		res.render('questions/add', { categories: categories });
	});
}

exports.addSubmit = function(req, res){
	res.send('heeeee');
}