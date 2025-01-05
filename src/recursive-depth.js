const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let maxInnerDepth = 0;
    arr.forEach(element => {
      let currDepth = this.calculateDepth(element);
      if(maxInnerDepth < currDepth) {
        maxInnerDepth = currDepth;
      }
    });
    return maxInnerDepth + 1;
  }
}

module.exports = {
  DepthCalculator
};
