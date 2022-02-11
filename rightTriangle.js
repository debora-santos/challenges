function rightTriangle (numberBase) {
    
  for (let i = 1; i <= numberBase; i++) {
    let space = numberBase - i;

    console.log('-'.repeat(space) + '*'.repeat(i));
  }

//   using while:
//   let counter = 1;
//   while (counter <= numberBase) {
//     let spaces = numberBase - counter;
//     console.log('-'.repeat(spaces) + '*'.repeat(counter));
//     counter++;
//   }
    
}

rightTriangle(4);
// output: 
// ---*
// --**
// -***
// ****
