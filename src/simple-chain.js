const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  getLength() {
    return this.array.length;
  },
  addLink(value = ' ') {
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    if (this.array[position - 1] === undefined) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    if (this.getLength() <= 0) return;
    let resultString = `( ${this.array[0]} )`;
    for (let i = 1; i < this.array.length; i += 1) {
      resultString += `~~( ${this.array[i]} )`;
    }
    this.array = [];
    return resultString;
  },
  array: [],
};

module.exports = {
  chainMaker
};
