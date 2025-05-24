#!/usr/bin/env node

// A script that prints x times "C is fun"

let sentence = parseInt(process.argv[2]);

if (Number.isNaN(sentence)) {
    console.log("Missing number of occurrences");
} else {
for (let x = 0; x < sentence; x++) {
    console.log("C is fun");
 }
}
