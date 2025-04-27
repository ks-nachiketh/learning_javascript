console.log ("Loops and Strings in JavaScript");
console.log ("===============================");

/* FOR LOOP*/
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

/* WHILE LOOP */

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

/* DO-WHILE LOOP */
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
/* STRNGS IN JAVASCRIPT */
