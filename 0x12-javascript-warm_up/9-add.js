#!/usr/bin/node
// Write a script that prints the addition of 2 integers
function addnumbers(num1, num2) {
  return num1 + num2;
}

const args = process.argv.slice(2);
const num1 = parseInt(args[0]);
const num2 = parseInt(args[1]);

if (isNaN(num1) || isNaN(num2)) {
  console.log('NaN');
} else {
  console.log(addnumbers(num1, num2));
}
