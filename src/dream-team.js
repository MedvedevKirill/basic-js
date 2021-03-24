const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let res = [];
  if(!Array.isArray(members)) return false;
  members.forEach(element => {
    if(typeof element === 'string') res.push(element.trim()[0].toUpperCase());
  });
  if(res.length > 0) return res.sort().join('');
  else return false;
};
