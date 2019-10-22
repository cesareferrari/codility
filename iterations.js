require("babel-core").transform("code", options);

import {separator} from './utilities.js';
// const separator = require('./utilities.js');

// For loop

// Function that prints out the elements of an array
const printArrayElements = array => {
  for (let i = 0; i < array.length; i++) {
    console.log("Array element:", array[i]);
  }
} 

printArrayElements([1, 2, 4, 5]);
printArrayElements(['a', 'b', 'c', 'd']);


// Factorial of an integer
// The factorial of an integer n is 1 * 2 * 3 * ... x n
// or multiplying all the integers from 1 to n

const factorialOf = integer => {
  let factorial = 1;

  for(let i = 1; i <= integer; i++) {
    factorial *= i;
  }

  return factorial;
}


console.log(factorialOf(2));  // 2
console.log(factorialOf(5));  // 120
console.log(factorialOf(4));  // 24



// Print out a triangle of asterisks

const triangle = n => {

  for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= i; j++) {
      process.stdout.write('*');
    }
    process.stdout.write("\n");
  }

}

triangle(4);
triangle(10);

separator();

const triangle2 = n => {
  for (let i = 1; i <= n; i++) {
    process.stdout.write('*');
  }
  process.stdout.write('\n');
}

triangle2(5);
