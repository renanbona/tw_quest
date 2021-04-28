const fizz_number = Number(process.argv[2]);

if (fizz_number % 15 === 0) {
  console.log("JavaScript");
} else if (fizz_number % 5 === 0) {
  console.log("Script");
} else if (fizz_number % 3 === 0) {
  console.log("Java");
} else {
  console.log(fizz_number);
}