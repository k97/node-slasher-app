/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = (obj) => JSON.stringify(obj, null, 2);

exports.workRoutes = (id) => {
  var projects = {
    'game-of-life': 'gol',
    'javascript-30': 'javascript-30',
    'resconnect': 'resconnect',
    'air': 'air',
    'display-directions': 'display-directions'
  };
  console.log("ProjectsID:", projects[id]);
  return projects[id];
}

exports.formateDate = (date) => {
  date = date ? new Date(date) : new Date();
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const formattedVal = `${day} ${monthNames[monthIndex].substring(0, 3)} ${year}`;
  return formattedVal;
};

