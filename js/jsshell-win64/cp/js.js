var n = readline()
n=parseInt(n)
let x = readline().split(" ").map(function (a) { return parseInt(a); });
let total = n*(n+1)/2
for (let i = 0; i < x.length; i++) {
  total=total-x[i]
}
print(total)