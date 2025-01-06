const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let currChar = '';
  let count = 0;
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (currChar !== str[i]) {
      result += `${count > 1 ? count : ''}${currChar}`;
      count = 0;
      currChar = str[i];
    }
    count += 1;
  }
  result += `${count > 1 ? count : ''}${currChar}`;
  return result;
}

module.exports = {
  encodeLine
};
