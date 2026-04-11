//SECTION A: forEach()
//Question 1: Using forEach() to multiply each number in the array by 2.
const numbers = [2, 4, 6, 8, 10];
numbers.forEach(function(number){
  console.log(number * 2)
});

//Question 2: Using forEach() to print each name in the array along with the strings "Hello" and "!"
const names = ["Esther", "John", "Ada", "Mike"];
names.forEach(function(name){
  console.log("Hello " + name + "!");
})

//SECTION B: map()
//Question 3: Using map() to create a new array where each number in the array is squared.
const numbers2 = [1, 2, 3, 4, 5]; 
const squaredNumbers = numbers2.map(numbers2 => numbers2 ** 2); //** is the exponentiation operator, raises the numbers to the power of 2 (i.e. squared).
console.log(squaredNumbers);

//Question 4: Using map() to create a new array where each price in the array has a 10% discount applied.
const prices = [100, 200, 300];
const discountedPrice = prices.map(prices => prices * 0.1); //10% discount of each price = 0.1 * price. 0.1 is same as 10%, same as 10/100.
console.log(discountedPrice);

//SECTION C: filter()
//Question 5: Using filter() to create a new array that contains only numbers greater than 10
const numbers3 = [5, 12, 8, 20, 3];
const filteredNumber = numbers3.filter(numbers3 => numbers3 > 10);
console.log(filteredNumber);

//Question 6: Using filter() to return only ages that are 18 and above
const ages = [15, 22, 17, 30, 18];
const adults = ages.filter(ages => ages >= 18);
console.log(adults);

//Bonus Question
const numbers4 = [10, 15, 20, 25, 30];

const filteredNumber2 = numbers4.filter(numbers4 => numbers4 > 20); //select numbers greater than 20 in the new array

const mappedNumber = numbers4.map(numbers4 => numbers4 <= 20 ? numbers4 * 2: numbers4); 
//Used a ternary operator to only multiply numbers that are less than or equal to 20. i.e. numbers4 <= 20 (condition)?; numbers4 * 2 (action to be carried out on numbers that pass the condition) : numbers4 (numbers which do not pass the condition and are to be returned as they are without any action). Works like an if/else statement.
console.log(mappedNumber);

