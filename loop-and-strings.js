console.log ("Loops and Strings in JavaScript");
console.log ("===============================");

/!* FOR LOOP*/
/* loops are used to iterate over a collection of items, such as an array or a string.
   using a loop we can perform operation until a certain condition is met.
    the most common types of loops in JavaScript are for, while, and do-while loops.*/
// for loop syntax

/* 
for (initialization; condition; increment/decrement) {
     code to be executed
}
*/

// Pattern printing using for loop
let num = 5
let loop = num*2;
for (let i=1; i <=loop; i++){
    
	if (i%2 !== 0 ){
    let pattern = "";
        console.log(pattern +" ".repeat(num--) + pattern+"*".repeat(i));

	}
}

// Infinite loop in JavaScript
// Infinite loops are loops that run indefinitely because the terminating condition is never met.
// This can happen if the loop's condition is always true or if the loop's increment/decrement statement is never executed.
// To prevent infinite loops, it is important to add a terminating condition to the loop.

/!* WHILE LOOP */

/* The while loop is used to execute a block of code as long as a specified condition is true.
   The condition is checked before the code block is executed, so if the condition is false at the beginning, the code block will not be executed at all.
   The syntax for a while loop is as follows:

   var initialization = 0;
   while (condition) {
          code to be executed while condition is true
         initialization++;
   }    
*/
let i = 0;
while (i < 5) {
    console.log("This is iteration number " + i);
    i++;
}

/!* DO-WHILE LOOP */
/* The do-while loop is similar to the while loop, but it guarantees that the code block will be executed at least once, even if the condition is false.
   The syntax for a do-while loop is as follows:

   var initialization = 0;
   do {
          code to be executed
         initialization++;
   } while (condition);    
*/

/* For -of - in loop */
/* The for...of loop is used to iterate over iterable objects, such as arrays, strings, and maps.
   The for...in loop is used to iterate over the properties of an object.
   The syntax for a for...of loop is as follows:

   for (const element of iterable) {
          code to be executed for each element in the iterable
   }    
*/

//Example 
const array = [1, 2, 3, 4, 5];
for (const element of array) {
    console.log("Element: " + element);
}


// But for as is not used for objects, it is used for arrays and strings
// for objects we use for in loop
// The syntax for a for...in loop is as follows:

// for (const key in object) {
// code to be executed for each key in the object
// }

//Example
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    console.log("Key: " + key + ", Value: " + object[key]);
}

// Practice Question
/* Create a game where you start with a randon number, ask user to guess the number unntil user enters correct value*/

/*
let randomNumber = 25;
let uservalue = prompt("enter your guess :")

for (let i= 0; i <= 100; i++){
	
	if (uservalue == randomNumber){
		alert("Your guess is correct, congragulations!")
        break;
	}else{
		uservalue = prompt("enter your guess: ")
	}
	
}
*/
/!*STRNGS IN JAVASCRIPT */
// Strings are a sequence of characters used to represent text in JavaScript.
// Strings can be created using single quotes (' '), double quotes (" "), or backticks (` `).
// Strings can be concatenated using the + operator.
// Strings can be accessed using the index of the character, starting from 0.
// Strings are immutable, meaning that once a string is created, it cannot be changed. However, new strings can be created based on existing strings.

//! Indexing in strings
console.log("\nIndexing in Strings: ");
let str = "Hello, World!";  
console.log("First character: " + str[0]); // H
console.log("Last character: " + str[str.length - 1]); // 

// ! Methods of strings
// Strings have many built-in methods that can be used to manipulate and work with strings. Some common string methods include:
// length : returns the length of the string
// charAt() : returns the character at a specified index
// indexOf() : returns the index of the first occurrence of a specified character
// slice() : returns a portion of the string
// substring() : returns a portion of the string between two specified indices
// toUpperCase() : converts the string to uppercase
// toLowerCase() : converts the string to lowercase
// trim() : removes whitespace from the beginning and end of the string
// split() : splits the string into an array of substrings
// join() : joins the elements of an array into a string
// replace() : replaces a specified substring with another substring
// repeat() : repeats the string a specified number of times
// includes() : checks if a substring is present in the string
// startsWith() : checks if the string starts with a specified substring
// endsWith() : checks if the string ends with a specified substring
// and many more.

// Example of string methods
console.log("\nString Methods: ");
let str1 = "Hello, World!"; 
console.log("Length: " + str1.length); 
console.log("Character at index 0: " + str1.charAt(0)); 
console.log("Index of 'o': " + str1.indexOf("o")); 
console.log("Slice: " + str1.slice(0, 5)); 
console.log("Substring: " + str1.substring(0, 5)); 
console.log("Uppercase: " + str1.toUpperCase());
console.log("Lowercase: " + str1.toLowerCase());
console.log("Trim: " + str1.trim());
console.log("Split: " + str1.split(", "));
console.log("Join: " + str1.split(", ").join(" "));
console.log("Replace: " + str1.replace("World", "JavaScript")); 
console.log("Repeat: " + str1.repeat(2)); // Repeat the string 2 times
console.log("Includes: " + str1.includes("World")); // Check if "World" is present in the string
console.log("Starts with 'Hello': " + str1.startsWith("Hello")); // Check if the string starts with "Hello"
console.log("Ends with '!': " + str1.endsWith("!")); // Check if the string ends with "!"

//! Creating string using template literals
// Template literals are a way to create strings using backticks (` `) and allow for multi-line strings and string interpolation (inserting variables into strings).
// Template literals can be used to create strings that span multiple lines and include variables or expressions.
// Example of template literals
console.log("\nTemplate Literals: ");
let username = "John";
let age = 30;       
let message = `Hello, my name is ${username} and I am ${age} years old.`;
console.log(message); // Hello, my name is John and I am 30 years old.

//! STRING INTERPOLATION 
// String interpolation is the process of inserting variables or expressions into a string.
//  This can be done using template literals or string concatenation.
// Example of string interpolation using template literals
let newname = "Alice";
let newage = 25;
let newmessage = `Hello, my name is ${newname} and I am ${newage} years old.`;
console.log(newmessage); // Hello, my name is Alice and I am 25 years old.

//! Escape characters in strings
// Escape characters are special characters that are used to represent certain characters in a string that would otherwise be difficult to include.
// Escape characters are used to represent special characters in strings, such as newlines, tabs, and quotes.
// Example of escape characters
console.log("\nEscape Characters: ");
let str2 = "Hello\nWorld"; // Newline character
console.log(str2); // Hello
console.log(str2); // World 
let str3 = "Hello\tWorld"; // Tab character
console.log(str3); // Hello    World
let str4 = "Hello\"World"; // Double quote character
console.log(str4); // Hello"World   
let str5 = "Hello\'World"; // Single quote character
console.log(str5); // Hello'World   