function reverseArray (array) {
  
   // variable to insert the new array
   let reversedArray = new Array;

   // index is size array - 1, it will return the last index number
   // ex: array=[1,2,3]; 
        // array.length = 3; 
        // 3-1 = 2 
        // will return 2, the number of the last index: array[2] = 3
    // it will start with the last index (biggest) to first (smallest)
        // need to be decreasing
   for (let i = array.length - 1; i >= 0; i--) {
       
       reversedArray.push(array[i]);
       
   }
   
   console.log('Reverse array using "for": '+ reversedArray);
   
    // solution using "while"
    let newArray = [];
    let i = array.length - 1;
    
    while (i >= 0) {
        newArray.push(array[i]);
        i--; 
    }
    console.log('Reverse array using "while": '+ newArray)
}

reverseArray([55, 1, 2, 3, 7, 10, 8]);
// output: [ 8, 10, 7, 3, 2, 1, 55 ]
