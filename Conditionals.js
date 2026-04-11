//if-else statements
let userAge = 16
if (userAge >= 18){
  //console.log("Welcome to Club Naija")
}else {
  //console.log("Sorry, you are not allowed")
}
//
let gender = "non-binary";

if (gender==="female"){
  //console.log("Welcome to the ladies section")
}else if (gender === "male"){
  //console.log("Welcome to the male section")
}else if (gender === "other"){
  //console.log("Welcome to the other section")
}else {
  //console.log("We don't know where you belong")
}


let username = "Ekene"
let password = "password1234"

if(username === "Ekene" && password === "password1234"){
  console.log("Login successful")
}else if (username === "Ekene" || password === "password1234"){
  console.log("username or password is correct")
}else {
  console.log("login failed")
}

let voterAge = 16
if (voterAge >= 18){
  console.log("You are eligible to vote")
}else{
  console.log("Sorry, you are not eligible to vote")
}

let childAge = 9;

if (childAge == 8){
  console.log("Admitted to Primary 1")
}else if (childAge < 7){
  console.log("Admitted to Nursery 3")
}else if (childAge > 10){
  console.log("Admitted to Primary 2")
}else {
  console.log("No admission")
}

let score = 89;
if (score >= 90){
  console.log("Grade: A")
}else if (score >= 70){
  console.log("Grade: B")
}else if (score >= 50){
  console.log("Grade: C")
}else {
  console.log("Grade: F - Please revise!")
}

let day = "Tuesday";
switch (day){
  case "Monday": console.log("New week, fresh start!");
  break;
  case "Friday": console.log("Almost the weekend!");
  break;
  case "Saturday":
  case "Sunday": console.log("It is the weekend! Rest Up!!!");
  break;
  default: console.log("Keep going, midweek vibes")
}