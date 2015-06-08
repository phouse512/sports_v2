var mongoose = require('mongoose'),
	deepPopulate = require('mongoose-deep-populate');

var questionSchema = mongoose.Schema({
	answers: [ String ],
	postTime: { type: Date, default: Date.now },
	endTime: Date,
	weight: { type: Number, default: 1 },
	prompt: String,
	rightAnswer: String,
	categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
	poster: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	votes: Number,
});

var Question = mongoose.model('Question', questionSchema);
module.exports = Question;