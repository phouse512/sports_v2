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
	categoryIds = _.map(_.filter(req.body.selectedCategories.split(","), Boolean), mongoose.Types.ObjectId);

	new Question({
		endTime: new Date(req.body.finalEndTime),
		prompt: req.body.prompt,
		poster: mongoose.Types.ObjectId(req.user.id),
		answers: _.filter(req.body.answers, Boolean),
		categories: categoryIds,
		votes: 0,
	}).save();

	Category.find({
		'_id':  { $in: categoryIds }
	}, function(err, categories){
		console.log(categories);
		for(i=0; i< categories.length; i++){
			categories[i].usageCount += 1;
		}
		saved_categories = [];
		total = categories.length;
		function saveAll(){
			var doc = categories.pop();
			
			doc.save(function(err, saved){
				if (err) throw err;

				saved_categories.push(saved[0]);
				if (--total) saveAll();
			});
		}
		saveAll();
		res.redirect('/questions');
	});
}

exports.all = function(req, res){
	Question.find().populate('poster').populate('categories').sort('endTime').exec(function(err, questions){
		res.render('questions/all', { questions: questions });
	});
}

exports.question = function(req, res){
	res.send('yo');
}