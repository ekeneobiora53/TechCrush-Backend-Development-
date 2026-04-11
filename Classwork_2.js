//Using the map

const numbers = [1, 2, 3, 4, 5];

let mappedNumber = numbers.map(number => number * 2);
console.log(mappedNumber);

const scores = [250, 300, 350, 200, 400, 180, 160];
let newScores = scores.filter(score => score >= 300);
console.log(newScores);

const sum = [2000, 3000, 400, 100, 600];
let grandTotal = sum.reduce((acc, current)=>{
return acc + current;
}, 0);
console.log(grandTotal);

const colors = ["blue", "yellow", "red"];
colors.pop()
console.log(colors);

colors.push("green")
console.log(colors);
