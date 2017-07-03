
/**
 * Method to retrieve a project store from the database
 */
exports.login = (req, res, next) => {
  if (req.body.passphrase && req.body.passphrase === 'embracetheweather') {
    req.session.authenticated = true;
    res.json({ auth: true });
  } else {
    res.json({ auth: false, message: 'Please enter the correct passphrase' });
  }

};

exports.isLoggedIn = (req, res, next) => {
	if(req.session.authenticated) {
		next();
		return;
	}
	res.redirect('/passphrase');
};
