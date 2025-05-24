#!/usr/bin/env node

// A script that prints a message depending on the number of arguments passed

const arguments = process.argv.slice(2)

if (arguments.length === 0) { 
console.log("No argument");
} else if (arguments.length === 1) {
console.log("Argument found");
} else {
console.log("Arguments found");
}
