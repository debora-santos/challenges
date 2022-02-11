function leftTriangle (numberBase) {
    
  for (let i = 1; i <= numberBase; i++) {     
    console.log('*'.repeat(i));
  }
    
  // using while:
  // let counter = 1;
  // while (counter <= numberBase) {
  //     console.log('*'.repeat(counter));
  //     counter++;
  // }
    
}

leftTriangle(4);

// output:
// *
// **
// ***
// ****
