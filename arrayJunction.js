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


// *-*-* Other way to solve without .concat() *-*-*

function arraysJunction (arrays) {

    let arrayUnion = new Array;
    
    for (let i = 0; i < arrays.length; i++) {
        // access arrays    
        let array = arrays[i];
  
        // access elements inside the array
        for (let j = 0; j < array.length; j++) { 

            arrayUnion.push(array[j]);

        }
    }
    
    console.log(arrayUnion);
    
}

arraysJunction([[1,2,3,6],[4,5,6],[7,8,9],[10,11,12,22]]);
// output: [ 1, 2, 3, 6, 4, 5, 6, 7, 8, 9, 10, 11, 12, 22 ]
