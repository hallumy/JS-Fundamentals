// A script that prints the addition of  integers

function add(a, b) {
   return a + b;
}

const sentence = process.argv.slice(2);
const first_arg = parseInt(sentence[0]);
const second_arg = parseInt(sentence[1]);

if (Number.isNaN(first_arg) || Number.isNaN(second_arg)) {
    console.log("NaN");
} else {
    console.log(add(first_arg,  second_arg));
} 
