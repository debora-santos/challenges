function isPrimeNumber(num) {
    
  for (let i = 2; i < num; i++) { 
        
    if (num % i == 0) { 
      return false;
    } 
        
  }
    
  return num;
    
}

function printPrimeNumbers(n) {
    
  for (let j = 2; j <= n; j++) {
        
    if (isPrimeNumber(j)) {
      console.log(j)
    }
      
  }
    
}

printPrimeNumbers(23);
// output:
// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19
// 23
