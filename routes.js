var main = require('./handlers/main.js'),
	users = require('./handlers/users');

module.exports = function(app, passport){
	
	app.get('/', main.home);


	app.get('/login', users.login);
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/game',
		failureRedirect: '/login',
		failureFlash: true,
	}));

	app.get('/signup', users.signup);
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/game',
		failureRedirect: '/signup',
		failureFlash: true,
	}));

	app.get('/profile', isLoggedIn, users.profile);

	app.get('/logout', users.logout);
}

function isLoggedIn(req, res, next){

	//if user is authenticated in session
	if (req.isAuthenticated())
		return next();

	// if not, redirect
	res.redirect('/');
}