//Loops
//for loops

for (let i = 0; i<=100; i++){
  console.log(i)
}

let arrayOfNames = ["Esther", "Ekene", "Obiora", "Dara", "Ebere"]
console.log(arrayOfNames.length)

for (let names = 0; names < arrayOfNames.length; names++){
  console.log(arrayOfNames[names])
}

for (let greetings = 0; greetings <3; greetings++){
  console.log("Hello World!!!")
}

for (let x = 2; x <= 26; x *=2){
  console.log(x)
}

for (let age=0; age <= 10; age++){
  console.log(age)
}

let age = 0;
while(age <= 10){
  console.log(age);
  age++
}

//for (countdown=10; countdown > 0; countdown--){
  //console.log(countdown)}

let countdown = 10;
while (countdown > 0){
  console.log(countdown)
  countdown--
}

let family = ["Ekene", "Ebere", "Dara", "Dubem"];
for (let member of family){
  console.log("You are awesome, " + member)
}

for (let i = 1; i <= 10; i++){
  //console.log(i)
}

let i = 1;
while (i <= 10){
  //console.log(i);
  i++
} 

let cities = ["Enugu", "Ebonyi", "Anambra", "Akwa Ibom", "Cross River"]
for (city of cities){
  console.log("Welcome to " + city)
}

let studentScore = 64;
if (studentScore >= 90){
  console.log("Grade: A")
}else if (studentScore >= 70){
  console.log("Grade: B")
}else if (studentScore >= 50){
  console.log("Grade: C")
}else{
  console.log("Fail")
}

names = ["Ada", "Ekene", "Obi"]
console.log(typeof(names));

const Hage = 2
console.log(Hage)

