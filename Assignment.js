//Online Bookstore
//Task 1: Create variables
let customerName = "Ekene";
let customerAge = 34;
let bookTitle = "How to survive in Nigeria";
let bookPrice = 3000;
let quantity = 3;
let isStudent = true;
console.log("Customer Name: " + customerName);
console.log("Book Title: " + bookTitle);

//Task 2: Arithmetic Operators
let totalPrice = bookPrice * quantity;
console.log("Total Price: " + totalPrice);

//Task 3: Comparison Operators
let isAdult = customerAge >= 18; //Is the customer's age equal to or greater than (>=) 18?
let buyingManyBooks = quantity > 3; //Is the quantity of books bought greater (>) than 3?
let isBookFiveThousand = bookPrice === 5000; //Is the bookprice strictly equal to (===) 5000?
console.log("Is the buyer an adult? " + isAdult);
console.log("Did the buyer buy many books? " + buyingManyBooks);
console.log("Is the price of the book 5000? " + isBookFiveThousand);

//Task 4: Non-primitive data type (Object)
//Objects contain keys and values in curly braces
const customerOrder = {
  customerName: "Ekene", 
  bookTitle: "How to survive in Nigeria", 
  quantity: 3, 
  totalPrice: 9000
  }; 
