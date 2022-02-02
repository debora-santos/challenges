function arrayJunction (arrays) {
    
  let arraySum = new Array;

  for (let i = 0; i < arrays.length; i++) {
    
    arraySum = arraySum.concat(arrays[i]);
    
   }
  
  // to print the result
  console.log(arraySum);
  
  return arraySum;
  
}

arrayJunction([[1,2,3],[4,5,6,7],[3,2,1]]);
// output: [ 1, 2, 3, 4, 5, 6, 7, 3, 2, 1 ]
