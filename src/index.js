module.exports = function getZerosCount(number, base) {
  let searchforPrime = 0;
  let powerofPrime;
  for(d = 2; d * d <= Math.sqrt(base); d++){
		    if(base % d === 0 ) {
		      break;
		    }
		    else {
		      powerofPrime = base;
		    }
      }
  for (let i = 2; i <= base / 2; i++) {
    searchforPrime = base / i;
    if (searchforPrime % Math.floor(searchforPrime) === 0){
      for(d = 2; d * d <= searchforPrime; d++){
		    if(searchforPrime % d === 0 ) {
		      break;
		    }
		    else {
		      powerofPrime = searchforPrime;
		    }
      }

		}
  }
  let zerosCount = Math.floor(number/powerofPrime);
  for(let n = 2, i = Math.pow(powerofPrime, n); i <= number; n++, i = Math.pow(powerofPrime, n)) {
    zerosCount += Math.floor(number / i);
  }
  return zerosCount;
  // your implementation
}
