let n = 0;

while (n <= 3) {
  console.log(n);
  n++;
}

console.log('End loop')



const numberOfDigits = (n) => {
  result = 0;

  while (n > 0) {
    n = Math.floor(n / 10);
    result++;
  }

  return result;
}


console.log(numberOfDigits(234));
console.log(numberOfDigits(1));
console.log(numberOfDigits(1000));
console.log(numberOfDigits(1000343490884773));


[1000343490884773].toString().split('').length
