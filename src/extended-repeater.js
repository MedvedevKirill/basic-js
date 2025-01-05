const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strConverted =  str === null? 'null' : `${str}`;
  if (!options) {
    return strConverted;
  }
  if (options.addition !== undefined) {
    let additionConverted = options.addition === null? 'null' : `${options.addition}`;
    const addSeparator = options.additionSeparator ? options.additionSeparator : '|';
    strConverted += additionConverted;
    if (options.additionRepeatTimes > 0) {
      strConverted += (addSeparator + additionConverted).repeat(options.additionRepeatTimes - 1);
    }
  }
  if (options.repeatTimes > 0) {
    const separator = options.separator ? options.separator : '+';
    strConverted += (separator + strConverted).repeat(options.repeatTimes - 1);
  }
  return strConverted;
}

module.exports = {
  repeater
};
