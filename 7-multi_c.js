const firsArg = process.argv[2];
const number = parseInt(firsArg);

if (isNaN(number)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < number; i++) {
    console.log("C is fun");
  }
}
