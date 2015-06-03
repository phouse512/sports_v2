var main = require('./handlers/main.js');

module.exports = function(app, passport){
	
	app.get('/', main.home);

}

function isLoggedIn(req, res, next){

	//if user is authenticated in session
	if (req.isAuthenticated())
		return next();

	// if not, redirect
	res.redirect('/');
}