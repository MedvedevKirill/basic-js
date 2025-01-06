const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexesOfOnes = [];
  arr.forEach((element, index) => {
    if (element === -1) {
      indexesOfOnes.push(index);
    }
  }); 
  const strCleanSorted = quickSort(arr.filter((value) => value !== -1));
  indexesOfOnes.forEach((item) => {
    strCleanSorted.splice(item, 0, -1);
  });
  return strCleanSorted;
}

function quickSort(arr) {
  if (arr.length == 0) return [];
  let a = [],
    b = [],
    p = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < p) a.push(arr[i]);
    else b.push(arr[i]);
  }
  return quickSort(a).concat(p, quickSort(b));
}

module.exports = {
  sortByHeight
};
