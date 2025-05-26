#!/usr/bin/env node

// A script that prints an integer

const arguments = process.argv[2];
const num = parseInt(arguments);

if (Number.isNaN(num)) {
console.log('Not a number'); 
} else {
console.log('My number:', num)
}
