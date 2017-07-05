// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = (obj) => JSON.stringify(obj, null, 2);

exports.formateDate = (date) => {
  if(!date) return;
  date = new Date(date);
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
