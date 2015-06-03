var mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs'),
	SALT_WORK_FACTOR = 10;

var userSchema = mongoose.Schema({
		username: String,
		password: String,
		email: String,
		joinDate: { type: Date, default: Date.now },
		lastAction: Date,
		totalAnswers: Number,
		totalCorrect: Number,
});

userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(SALT_WORK_FACTOR), null);
};

userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model('User', userSchema);
module.exports = User;
