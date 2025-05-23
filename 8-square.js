// A script that prints a square

let sentence = parseInt(process.argv[2]);

if (Number.isNaN(sentence)) {
    console.log('Missing size');
} else {
for (let x = 0; x < sentence; x++) {
   console.log(x ** 2);
 }
}
