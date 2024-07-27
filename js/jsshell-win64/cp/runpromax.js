let a = [1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0]
let I = 0, j = 1;
while (I < a.length && j < a.length) {
    if (a[I] == 0 && a[j] == 1) {
        let temp = a[j]
        a[j] = a[I]
        a[I] = temp
        I++; j++;
    }
    else {
        if (a[I] == 1) {
            I++;
            j++;
        }
        else {
            j++;
        }
    }
}
console.log(a)