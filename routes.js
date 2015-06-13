var main = require('./handlers/main'),
	users = require('./handlers/users'),
	questions = require('./handlers/questions');

module.exports = function(app, passport){
	
	app.get('/', main.home);


	app.get('/login', users.login);
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true,
	}));

	app.get('/signup', users.signup);
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/profile',
		failureRedirect: '/signup',
		failureFlash: true,
	}));

	app.get('/profile', isLoggedIn, users.profile);

	app.get('/logout', users.logout);

	// questions api
	app.get('/questions/add', isLoggedIn, questions.add);
	app.post('/questions/add', isLoggedIn, questions.addSubmit);

	app.get('/questions', questions.all);
	app.get('/questions/:id', questions.question);
}

// check if logged in

function isLoggedIn(req, res, next){

	//if user is authenticated in session
	if (req.isAuthenticated())
		return next();

	// if not, redirect
	res.redirect('/');
}