"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}

// ********** Code Start **********

function main() {
  var x = readline().split(" ").map(function (a) { return parseInt(a); });
  const max = Math.max(...x);
  let count, large = max;

  for (let i = 0; i < max; i++) {
    count = Math.abs(i - x[0]);
    count += Math.abs(i - x[1]);
    count += Math.abs(i - x[2]);
    if (count < large) {
      large = count
    }
    count = 0
  }
  print(large)
}




