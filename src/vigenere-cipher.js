const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  direct = true;
  constructor(direct) {
    if (!(typeof direct === 'undefined') && direct === false) this.direct = false;
  }
  a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  encrypt(m, k) {
    if(typeof m === 'undefined' || typeof k === 'undefined') throw Error;
    m = m.toUpperCase();
    k = k.toUpperCase();
    let res = '';
    let cor = 0;
    for (let i = 0; i < m.length; i++) {
      let mi = this.a.indexOf(m[i]);
      let ki = k[((i-cor) >= k.length) ? (i-cor) % k.length : i-cor];
      if(this.a.includes(m[i])) res += this.a[(mi + this.a.indexOf(ki)) % this.a.length];
      else {res += m[i]; cor++;}
    }
    return this.direct?res:[...res].reverse().join('');
  }
  decrypt(m,k) {
    if(typeof m === 'undefined' || typeof k === 'undefined') throw Error;
    m = m.toUpperCase();
    k = k.toUpperCase();
    let res = '';
    let cor = 0;
    for (let i = 0; i < m.length; i++) {
      let mi = this.a.indexOf(m[i]);
      let ki = k[((i-cor) >= k.length) ? (i-cor) % k.length : i-cor];
      if(this.a.includes(m[i])) res += this.a[(mi + this.a.length - this.a.indexOf(ki)) % this.a.length];
      else {res += m[i]; cor++;}
    }
    return this.direct?res:[...res].reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
