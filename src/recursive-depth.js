const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 1;
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])) {
        res = Math.max(1 + this.calculateDepth(arr[i]), res);
      }
    }
    return res;
  }
};