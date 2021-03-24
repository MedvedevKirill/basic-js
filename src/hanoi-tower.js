const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let t = Math.pow(2, disksNumber) - 1;
  return  {
    turns: t,
    seconds: Math.floor(3600 * ((t / turnsSpeed)))
  }
};
