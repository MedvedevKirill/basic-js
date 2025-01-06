const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    if (!this.isDirect) {
      this._addToResult = (newChar, result) => {
        return newChar + result;
      } 
    }
    else {
      this._addToResult = (newChar, result) => {
        return result + newChar;
      } 
    }
  }
  _ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
  encrypt(str, key) {
    if (typeof str !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }
    let result = '';
    for (let i = 0, j = 0; i < str.length; i += 1, j += 1) {
      const currElementAlphabetIndex = this._ALPHABET.indexOf(str[i].toLowerCase());
      if (currElementAlphabetIndex === -1) {
        result = this._addToResult(str[i], result);
        j -= 1;
      }
      else {
        const currKeyElementAlphabetIndex = this._ALPHABET.indexOf(key[j % key.length].toLowerCase());
        const newChar = this._ALPHABET[(currElementAlphabetIndex + currKeyElementAlphabetIndex) % this._ALPHABET.length].toUpperCase();
        result = this._addToResult(newChar, result);
      }
    }
    return result;
  }
  decrypt(str, key) {
    if (typeof str !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }
    let result = '';
    for (let i = 0, j = 0; i < str.length; i += 1, j += 1) {
      const currElementAlphabetIndex = this._ALPHABET.indexOf(str[i].toLowerCase());
      if (currElementAlphabetIndex === -1) {
        result = this._addToResult(str[i], result);
        j -= 1;
      }
      else {
        const currKeyElementAlphabetIndex = this._ALPHABET.indexOf(key[j % key.length].toLowerCase());
        let newCharIndex = currElementAlphabetIndex - currKeyElementAlphabetIndex;
        if (newCharIndex < 0) {
          newCharIndex += this._ALPHABET.length;
        }
        const newChar = this._ALPHABET[newCharIndex].toUpperCase();
        result = this._addToResult(newChar, result);
      }
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
