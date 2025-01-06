const { NotImplementedError } = require('../extensions/index.js');
const fileNames = {};

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const resultArray = [];
  names.forEach((item) => {
    let name = '';
    if (!fileNames.hasOwnProperty(item)) {
      fileNames[item] = 1;
      if (!resultArray.includes(item)) {
        name = item;
      }
      else {
        name = `${item}(${fileNames[item]})`;
        fileNames[item] += 1;
      }
    }
    else {
      name = `${item}(${fileNames[item]})`;
      fileNames[item] += 1;
    }
    resultArray.push(name);
  });
  return resultArray;
}

module.exports = {
  renameFiles
};
