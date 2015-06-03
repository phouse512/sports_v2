var mongoose = require('mongoose');

var predictionSchema = mongoose.Schema({
	score: Number,
	correct: Boolean,
	choice: String,
	dateChosen: { type: Date, default: Date.now },
	question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' }
});

var Prediction = mongoose.model('Prediction', predictionSchema);
module.exports = Prediction;