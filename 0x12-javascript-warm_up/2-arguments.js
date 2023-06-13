#!/usr/bin/node
// Write a script that prints a message depending of the number of arguments passes:

const count = process.argv.length;
console.log(count === 2 ? 'No argument' : count === 3 ? 'Argument found' : 'Arguments found');
