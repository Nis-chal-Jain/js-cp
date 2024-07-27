var x = readline().split(" ").map(function (a) { return parseInt(a); });
for (let i = 0; i < x[0]; i++) {
  let y = readline().split(" ").map(function (a) { return parseInt(a); });
  let z = readline().split(" ").map(function (a) { return parseInt(a); });
  let arr1 = [];
  let S = new Set()
  for (let j = 0; j < z.length; j++) {
    for (let k = 0; k < z.length; k++) {
      let a= z[j], b = z[k]
      if (a > b) {
        arr1.push(a- b)
      }

    }
  }
  z.forEach(item => S.add(item))
  arr1.forEach(item => S.add(item))
  print(S.size)
}