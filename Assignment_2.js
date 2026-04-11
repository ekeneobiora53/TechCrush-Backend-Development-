// 1. Substring & Slice: They both return characters in a string between a given start index and end index (not always included), without modifying the original string. 
const str = "Nigeria is awesome";

//Extract "Nigeria" using substring()
const extractNigeria = str.substring(0, 7); // 0 for start index "N", 7 for end index " ". The character occupying the end index is not displayed.
console.log(extractNigeria);

//Extract "awesome" using slice()
const extractAwesome = str.slice(11); //Only the start index is given (11), so extraction starts from the character occupying the 11th index till the end of the string.
console.log(extractAwesome); 

//Get "is" using slice()
const getIs = str.slice(8, 10); // "is" lies within start index 8 and end index 10.
console.log(getIs);

//2. Split(): Divides a string into an array based on a specified separator.
const names = "John,Jane,Doe"; 

//Split into an array using comma as a seperator
const splitComma = names.split(","); 
console.log(splitComma);

//Join with space: Join combines elements of an array back to a string using a specified separator. It is the opposite of split()
const joinSpace = splitComma.join(" "); //Joins elements in the array splitComma to a string using space (" ") as a separator.
console.log(joinSpace);

//Split path
const path = "/user/home/docs";

//Split into an array using slash ("/") as a seperator
const splitPath = path.split("/");
console.log(splitPath);

//Get "home" using split and index
console.log(splitPath[2]); //After splitting the contents of path into an array, "home" occupied index 2 [2] in the array. 

//3. Mix
const email = "user@example.com";

//Get username (user) using split()
const splitEmail = email.split("@"); //To get "user", string in email was split into an array using "@" as a separator
console.log(splitEmail);
console.log(splitEmail[0]); //After the split, "user" occupied index 0 [0] in the array.

//Check if it's a .com domain using endsWith()
const endsCom = email.endsWith(".com"); //Returns a boolean. Asks if the string in the variable, email, ends with ".com"
console.log(endsCom);

//Replace @ with AT using replace()
const replace = email.replace("@", "AT"); //Replaces the first occurrence of "@" with "AT"
console.log(replace);


