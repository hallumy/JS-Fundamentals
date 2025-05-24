#!/usr/bin/ env node
// A script that prints the addition of  integers

function add(a, b) {
   return a + b;
}

const num = process.argv.slice(2);
const first_arg = parseInt(num[0]);
const second_arg = parseInt(num[1]);

if (Number.isNaN(first_arg) || Number.isNaN(second_arg)) {
    console.log("NaN");
} else {
    console.log(add(first_arg,  second_arg));
} 
