const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === undefined) return 'Unable to determine the time of year!';
  if(Object.prototype.toString.call(date) != '[object Date]') throw Error('THROWN');
  let month = date.getMonth();
  if(month <= 1 || month === 11) month = 'winter';
  else if(month <= 4) month = 'spring';
  else if(month <= 7) month = 'summer';
  else month = 'fall';
  return month;
};
