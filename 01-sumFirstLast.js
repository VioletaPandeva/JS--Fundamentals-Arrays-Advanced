function sumFirstLast (arr) {

let fisrt = arr.shift();
let last = arr.pop();

console.log(Number(fisrt) + Number(last));
}
sumFirstLast (['20', '30', '40']);