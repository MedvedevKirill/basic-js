const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(typeof options.repeatTimes === 'undefined') options.repeatTimes = 1;
  if(typeof options.addition === 'undefined') options.addition = '';
  if(typeof options.additionRepeatTimes === 'undefined') options.additionRepeatTimes = 1;
  if(typeof options.additionSeparator === 'undefined') options.additionSeparator = '|';
  if(typeof options.separator === 'undefined') options.separator = '+';
  let addition = '';
  for(let i = 1; i <= options.additionRepeatTimes; i++){
    addition += options.addition + (i === options.additionRepeatTimes?'': options.additionSeparator);
  }
  let st = '';
  for(let i = 1; i <= options.repeatTimes; i++){
    st += str + addition + (i === options.repeatTimes?'': options.separator);
  }
  return st;
};
  