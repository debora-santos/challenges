function printOddNumbers (number) { 
  for (let i = 0; i <= number; i++) {
    if (i % 2 ==! 0) {
      console.log(i);
    }      
  }
}

printOddNumbers(20);
// output: 
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19
