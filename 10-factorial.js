#!/usr/bin/env node

// Script that computes and prints factorial

function factorial(n) {
   if ( n === 0 || n === 1) return 1;
   return n * factorial(n - 1);
}

const num = parseInt(process.argv[2]);

if (Number.isNaN(num)) {
   console.log(1);
} else {
   console.log(factorial(num));
}
