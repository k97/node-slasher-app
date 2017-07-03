
exports.projectRoutes = (id) => {
  var projects = {
    'game-of-life': 'gol',
    'javascript-30': 'javascript-30',
    'resconnect': 'resconnect',
    'air': 'air',
    'display-directions': 'display-directions'
  };
  return projects[id];
}
