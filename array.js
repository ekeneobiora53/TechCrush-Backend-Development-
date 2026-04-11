let items = ["Milk", "Chocolate", "Biscuits"]
//Assignment: Difference between higher order array methods and array methods

//forEach runs a function once for every item in the array
let fruits = ["mango", "orange", "banana", "pawpaw", "guava"];

fruits.forEach(function(fruit){
  console.log("I eat " + fruit)
})

//map method

let score = [90, 80, 70, 60, 50]
let newScore = score.map(score => score + 5);
let newScores = score.map(function(score){
  return score + 1
})
console.log(newScore);
console.log(newScores);

//Filter method
filteredScores = score.filter(function(score){
  return score <= 70
})
console.log(filteredScores);

//Find: Returns the first occurrence
const studentsNames = ["John", "Ada", "Doe", "Jane", "Smith", "Bola"]
const found = studentsNames.find(function(name){
  return name === "John"
})
console.log(found);

const found2 = studentsNames.find((name)=>{
return name === "Doe"
})
console.log(found2);

//reduce: Boil down an array into a single value
let cartPrices = [1500, 800, 2200, 450, 1000];
let total = cartPrices.reduce(function(acc, currentPrice){
  return acc + currentPrice;
}, 0);
console.log(total);

let grandTotal = cartPrices.reduce((acc, current)=>{
return acc + current;
}, 0);
console.log(grandTotal);

//push, pop, shift, unshift
let colours = ["Red", "Blue", "Green"];
colours.push("yellow") //push adds an item at the end of an array
console.log(colours);

colours.pop(); //removes the last element in an array
console.log(colours);

let firstColor = colours.shift(); //removes the first element in an array


let newsLength = colours.unshift("Purple"); //adds the word to the beginning of the array


//the return type for 
