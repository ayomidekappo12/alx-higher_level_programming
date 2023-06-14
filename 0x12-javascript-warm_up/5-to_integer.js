#!/usr/bin/node
/*
 Write a script that prints My number: <first argument converted in integer>
 if the first argument can be converted to an integer:
*/
console.log(isNaN(Number(process.argv[2])) ? 'Not a number' : process.argv[2]);
