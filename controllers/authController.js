const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.login = passport.authenticate('local', {
	failureRedirect: '/about',
	successRedirect: '/'
});

exports.logout = (req, res) => {
	req.logout();
	res.redirect('/');
};

exports.isLoggedIn = (req, res, next) => {
	if(req.isAuthenticated()) {
		next();
		return;
	}
	res.redirect('/passphrase');
};
