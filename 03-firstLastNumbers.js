function firstLastNumbers (input) {
let k = input.shift();

console.log(input.slice(0, k).join(' '));
console.log(input.slice(-k).join(' '));

}

firstLastNumbers ([2, 
7, 8, 9]);