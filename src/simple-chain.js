const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value + '');
    return this;
  },
  removeLink(position) {
    if(isNaN(position) || (position^0) !== position  || position-1 < 0 || position -1 >= this.arr.length) {this.arr = []; throw Error;}
    else this.arr.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = '( ' + this.arr.join(' )~~( ') + ' )';
    this.arr = [];
    return str; 
  },
  'arr': [],
  'thrown': false

};

module.exports = chainMaker;
