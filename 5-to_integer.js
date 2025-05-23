// A script that prints an integer

const arguments = process.argv[2];

if (Number.isInteger(arguments)) {
console.log('Not a number'); 
} else {
console.log('My number:', arguments)
}
