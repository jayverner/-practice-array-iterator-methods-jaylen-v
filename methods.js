let favoriteCities = ["St. Louis", "Las Vegas", "Milwaukee", "Dallas", "New York"];
favoriteCities.forEach(city => console.log(city.toUpperCase()));

console.log(favoriteFood);

let numbers = [1,2,3,4,5];
let squared = numbers.map(function(element, index, array) {
    return element * element;
});

console.log(squared);

let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(num => num >= 80);

console.log(highScores);

let favoriteFood = ["Pizza", "Burger", "Pasta", "Rolls", "Chicken"];
let findFood = favoriteFood.find(food => food.length > 4);
let findFoodIndex = favoriteFood.findIndex(food => food.length > 4);

console.log(firstFood);
console.log(firstFoodIndex);


const temperatures = [34, 85, 92, 44, 70];
const aboveNinety = temperatures.some(temp => temp > 90);
const belowFifty = temperatures.every(temp => temp > 50);


console.log([anyAboveNinety, belowFifty]);

const totalBudget = 150;
const prices = [25, 40, 15, 30];
const remainingBudget = prices.reduce((accumulator, currentPrice) => {
    return accumulator - currentPrice;
}, totalBudget);

console.log("Remaining budget" + remainingBudget);
