let msg = "   Hello, WORLD!    ";

let trimmedMsg = msg.trim() 
let frontTrimmedMsg = msg.trimStart()
let endTrimmedMsg = msg.trimEnd() 
let starts = msg.startsWith("Hello")
let ends = msg.endsWith("WORLD!")
let capitalLetter = msg.toUpperCase()
let smallLetter = msg.toLowerCase()
let msgIndex = msg.indexOf("WORLD")
let replacedMsg = msg.replace("WORLD", "Nigeria");
let replacedAllMsg = msg.replaceAll("L", "1");
let slicedMsg = msg.slice(3, 8)

console.log (trimmedMsg)
console.log(frontTrimmedMsg)
console.log(endTrimmedMsg)
console.log(starts)
console.log(ends)
console.log(capitalLetter)
console.log(smallLetter)
console.log(msgIndex)
console.log(replacedMsg)
console.log(replacedAllMsg)