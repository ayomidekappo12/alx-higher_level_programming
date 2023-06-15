#!/usr/bin/node
// Write a script that prints a square
const square = parseInt(process.argv[2]);

if (!isNaN(square)) {
  if (square > 0) {
    for (let s = 0; s < square; s++) {
      console.log('X'.repeat(square));
    }
  } else {
    console.log('size most be a positive number');
  }
} else {
  console.log('Missing size');
}
