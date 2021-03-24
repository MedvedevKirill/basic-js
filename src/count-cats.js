const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  matrix = matrix.flat();
  let count = 0;
  matrix.forEach(element => {
    if(element === '^^') count++;
  });
  return count;
};
