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
  var p = readline();
  for(let i =0; i<p;i++){
    var arr = readline().split(" ").map(function (a) { return parseInt(a); });
    var n =arr[0],k=arr[1],matrix=[]
    for(let q=0;q<n;q++){
      var input = readline();
      matrix.push(input)
    }
    const result = matrix.map(row => row.split('').map(Number));
  
    var final =[]
    for(let a=0;a<n;a+=k){
      for(let b=0;b<n;b+=k){
        final.push(result[a][b])
      }
    }
    // print(final)
    const chunks = splitIntoChunks(final, n/k);
  
  // Join the chunks with newline characters
  // const result = .join('\n');
  
  const fff = chunks.map(subarray => subarray.join('')).join('\n');
  fff.trim()
  print(fff);
  }
  function splitIntoChunks(str, chunkSize) {
    const chunks = [];
    for (let i = 0; i < str.length; i += chunkSize) {
      chunks.push(str.slice(i, i + chunkSize));
    }
    return chunks;
  }
  
}
