let a = [1,0, 1 ,1,1,0,1,1,0,0,0,1,1,0]

let count=0;
for (let i = 0; i < a.length; i++) {
    if(a[i]==1)
        count++;
}

let j=0;
while(count!=0){
      a[j]=1;
      count--;
      j++
}
while(j<a.length){
    a[j]=0;
    j++;
}
console.log(a)