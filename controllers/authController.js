/**
 * Simple method to validate the passphrase
 */
exports.login = (req, res, next) => {
  var message = 'Please enter the correct passphrase';
  req.session.authenticated = false;
  if (req.body.passphrase && req.body.passphrase.trim().toLowerCase() === process.env.SECRET) {
    req.session.authenticated = true;
    message = 'Passphrase has been verified successfuly!';
    next();
  }
  let resVal = { auth: req.session.authenticated, message };
  return res.json(resVal).end();
};

/**
 * Method to check the session authorisation
 */
exports.isLoggedIn = (req, res, next) => {
  if (req.session.authenticated) {
    next();
    return;
  }
  res.redirect('/passphrase');
};
