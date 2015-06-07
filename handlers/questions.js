var Category = require('../models/category'),
	Question = require('../models/question'),
	mongoose = require('mongoose'),
	_ = require('lodash');

exports.add = function(req, res){
	Category.find(function(err, categories){
		res.render('questions/add', { categories: categories });
	});
}

exports.addSubmit = function(req, res){
	console.log(req.body.answers);
	console.log(req.body.endTime);
	console.log(req.body.selectedCategories.split(","));
	console.log(req.body.prompt);
	console.log(req.user.id);

	new Question({
		endTime: new Date(req.body.finalEndTime),
		prompt: req.body.prompt,
		poster: mongoose.Types.ObjectId(req.user.id),
		answers: _.filter(req.body.answers, Boolean),
		categories: _.map(_.filter(req.body.selectedCategories.split(","), Boolean), mongoose.Types.ObjectId),
	}).save();
	res.send('heeeee');
}