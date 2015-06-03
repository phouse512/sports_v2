var mongoose = require('mongoose'),
	deepPopulate = require('mongoose-deep-populate');

var questionSchema = mongoose.Schema({
	answers: [ String ],
	postTime: { type: Date, default: Date.now },
	endTime: Date,
	weight: Number,
	prompt: String,
	rightAnswer: String,
	categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
});

var Question = mongoose.model('Question', questionSchema);
module.exports = Question;