const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let res;
  if(sampleActivity !== 'string' || isNaN(sampleActivity) || (sampleActivity >= MODERN_ACTIVITY)) res = false;
  else res = Math.ceil(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
  return res;
};
