var User = require('../models/user.js');

exports.login = function(req, res){
	res.render('users/login', { message: req.flash('loginMessage')});
}

exports.logout = function(req, res){
	req.logout();
	res.redirect('/');
}

exports.signup = function(req, res){
	res.render('users/signup', { message: req.flash('signupMessage')});
}

exports.profile = function(req, res){
	res.render('users/profile');
}