function maxminNumber(largeNumber){
  let maxNumber = largeNumber[0];
  let minNumber = largeNumber[0]
  for(let i=0; i<largeNumber.length; i++){
  if(largeNumber[i]> maxNumber ){
    maxNumber = largeNumber[i];
  }
  if(largeNumber[i]< minNumber ){
    minNumber = largeNumber[i];
  }
}
  return {maxNumber, minNumber};
}
let x = maxminNumber([800,8,9,11,500,900]);
console.log(x);