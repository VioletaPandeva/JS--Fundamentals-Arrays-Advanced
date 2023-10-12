function lastKNumbersSequance (n, k) {
let newArry = [1];

while (n > newArry.length) {
let kArr = newArry.slice(-k);
let sum = 0;

for (let i = 0; i < kArr.length; i++) {
    sum += kArr[i];
}
newArry.push(sum);
}
console.log(newArry.join(' '));

    
}

lastKNumbersSequance (6, 3);