function printEvenNumbers (number) {
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

printEvenNumbers(10);
// output:
// 0
// 2
// 4
// 6
// 8
// 10
