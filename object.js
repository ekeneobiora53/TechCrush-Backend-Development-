let obj = {
  name : "Esther",
  age : 25,
  profession : "Developer",
}

let student = {
  name : "Ekene Obiora",
  age : 34,
  department : "Biology",
  isEnrolled : true
};

//Destructuring: 
console.log(student.department);
const {name, age, department} = student;

console.log(name);

//iterating over objects
//'for in' for keys, 'for of' for values

const user = {
  name: "Ekene",
  password: "12345",
  isMale: true,
  city: "Enugu",
  age: 34
}
for (let key in user){
  console.log("Keys: " + key) // to return keys
  console.log("Values: " + user[key]) // to return values
}
 
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

