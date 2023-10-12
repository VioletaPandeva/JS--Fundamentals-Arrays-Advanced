function smallestTwoNumbers (arry) {
arry.sort((a, b) => a - b);
let newArry = arry.slice(0, 2);
console.log(newArry.join(' '));
}

smallestTwoNumbers ([30, 15, 50, 5]);