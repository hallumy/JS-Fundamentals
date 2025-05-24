#!/usr/bin/env node

// A script that prints the first argument passed to it

const arguments = process.argv[2];

if (arguments === undefined) {
console.log("No argument");
} else {
console.log(arguments);
}

