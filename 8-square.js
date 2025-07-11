const arg = process.argv[2];
if (!parseInt(arg)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < arg; i++) {
    let result;
    result = console.log("X".repeat(arg));
  }
}
