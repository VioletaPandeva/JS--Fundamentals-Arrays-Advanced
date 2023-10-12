function listOfProducts (arry) {
let sortedArry = arry.sort();

for (let i = 0; i < sortedArry.length; i++) {
    console.log(`${i + 1}.${sortedArry[i]}`);
}
}

listOfProducts (['Potatoes', 'Tomatoes', 'Onions', 'Apples']);