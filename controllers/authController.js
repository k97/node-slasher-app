
/**
 * Method to retrieve a project store from the database
 */
exports.login = (req, res, next) => {
  console.log(req.body)
  if (req.body.passphrase && req.body.passphrase === 'embrace') {
    req.session.authenticated = true;
    res.json({ auth: true });
  } else {
    res.json({ auth: false });
  }
  
};

exports.isLoggedIn = (req, res, next) => {
	if(req.session.authenticated) {
		next();
		return;
	}
	res.redirect('/passphrase');
};
