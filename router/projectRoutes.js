const { projectLinks } = require('../handlers/projectLinks');

exports.setProjectPage = (id) => {
  var projects = {
    'game-of-life': 'gol',
    'javascript-30': 'javascript-30',
    'resconnect': 'resconnect',
    'air': 'air',
    'display-directions': 'display-directions',
    'sony-music-app': 'sony-music-app',
    'viewport-resizer': 'viewport-resizer',
    'crichq': 'crichq',
    'wonder': 'wonder',
    'fss': 'fss',
    'grading-system': 'grading-system'
  };
  return projects[id];
}

exports.onAuthorisedProject = (req, res, next) => {
  let pId = req.params.id;
  var authVal = false;
  for (var project of projectLinks) {
    if (project.locked && project.url == pId && !req.session.authenticated) {
      return res.redirect('/passphrase#'+pId);
    } else {
      next();
      return;
    }
  }
}
