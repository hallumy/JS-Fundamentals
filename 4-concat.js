#!/usr/bin/env node

// A script that prints 2 argument passed to it

const argument = process.argv[2];
const arguments = process.argv[3];

console.log(`${argument} is ${arguments}`);
