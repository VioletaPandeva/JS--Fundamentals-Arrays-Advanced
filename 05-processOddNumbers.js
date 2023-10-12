function processOddNumbers (arry) {
let oddIndex = arry.filter((x, i) => i % 2 != 0);

let double = oddIndex.map((x) => x * 2);

let reverse = double.reverse();

let result = reverse.join(' ');

console.log(result);

}

processOddNumbers ([10, 15, 20, 25]);