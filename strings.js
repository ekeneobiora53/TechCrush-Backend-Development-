//lenght of a string
let stringText = "This is a class on string methods"
console.log(stringText.length)

let capitalLetter = stringText.toUpperCase() //change fonts to uppercase
let smallLetter = stringText.toLowerCase() // change fonts to lowercase
console.log(capitalLetter)
console.log(smallLetter)


let str = "  Hello World  "
let trimmedStr = str.trim() // removes spaces from both the start and end of the sentence
let frontTrimmedStr = str.trimStart() // removes spaces from the start of the sentence
let endTrimmedStr = str.trimEnd() // removes spaces from the end of the sentence
console.log(trimmedStr)
console.log(frontTrimmedStr)
console.log(endTrimmedStr)


//indexOf() Returns the index/position of the first match. Returns -1 if nothing is found. Returns a number
let userEmail = "Ekeneobiora@gmail.com"
let emailIndex = userEmail.indexOf("@")
console.log(emailIndex)

//includes() Returns a boolean (true or false); true if there is a match, false if not 
let emailContainsAt = userEmail.includes("@")
console.log(emailContainsAt)

//startsWith checks if a string starts a sentence
let userName = "techcrush Ekene 6"
let starts = userName.startsWith("techcrush")
console.log(starts)

//endsWith checks if a string ends a sentence
let ends = userName.endsWith("6")
console.log(ends)

//Slice() and substring()

let testString = "My name is Ekene"
let slicedString = testString.slice(11);
let substringString = testString.substring(11);
console.log(slicedString);
console.log(substringString);

//replace and replaceAll both replaces a string. But while replace only changes the first match, replaceAll changes all matches in the string

let text = "Ekene is a backend developer in training. Ekene loves JavaScript. Ekene will make money from backend development"

let replacedText = text.replace("Ekene", "He");
let replacedAllText = text.replaceAll("Ekene", "He");
console.log(replacedText)
console.log(replacedAllText)

//split

const sentence = "LANGUAGE: JavaScript, Python, Java, C++"
let splitSentence = sentence.split("Python")
console.log(splitSentence)