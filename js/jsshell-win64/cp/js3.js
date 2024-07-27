let x = readline().split(" ").map(function (a) { return parseInt(a); });
let n = x[0], a = x[1], b = x[2], price = 0;
if (b > (2 * a)) {
  for (let i = 0; i < n; i++) {
    price += a
  }
}
else {
  if (x % 2 == 1) {
    while (x != 1) {
      price += b
      x = x - 2
    }
    price += a
  }
  else {
    x = x / 2
    while (x != 0) {
      price += b
      x--
    }
  }
}
print(price)