console.log("This is my first java script file")
console.log("Lets start documenting all the basics of java script")

//Variables
//Variables are containers for storing data values
//let, const, var
//let is used to declare a block scope local variable, optionally initializing it to a value

/* LET */
let name = "John Doe"   //string
let age = 30          //number                  
let isStudent = true   //boolean
let hobbies = ["reading", "gaming", "coding"] //array

// objects are not a primitive data type, but they are a complex data type
// objects are collections of key-value pairs   
// objects are used to store multiple values in a single variable
// objects are mutable, meaning they can be changed after they are created
let address = {        //object
    street: "123 Main St",
    city: "New York",
    state: "NY"
}

// null is a special value that represents the absence of any value or object
// null is an object type in JavaScript, but it is not a valid object
// null is a primitive data type in JavaScript, but it is not a valid primitive value
// null is often used to indicate that a variable has been declared but has not yet been assigned a value
let nullValue = null  //null

// undefined is a special value that represents the absence of a value or object
// undefined is a primitive data type in JavaScript, but it is not a valid primitive value
// undefined is often used to indicate that a variable has not yet been assigned a value
// undefined is the default value of a variable that has been declared but not yet assigned a value
// undefined is also the default value of a function that does not return a value
let undefinedValue; //undefined

// bigint is a special type of number that can represent integers with arbitrary precision
// bigint is a primitive data type in JavaScript, but it is not a valid primitive value 
// bigint is often used to represent large integers that cannot be represented by the number type
// bigint is created by appending "n" to the end of an integer literal
let bigIntValue = 1234567890123456789012345678901234567890n //bigint

// symbol is a special type of object that is used to create unique identifiers for object properties
// symbol is a primitive data type in JavaScript, but it is not a valid primitive value
// symbol is often used to create unique identifiers for object properties
// symbol is created by calling the Symbol() function
// symbol is often used to create unique identifiers for object properties
let symbolValue = Symbol("unique") //symbol

// function is a special type of object that is used to create reusable blocks of code
// function is a first-class object in JavaScript, meaning it can be treated like any other object
// function is a primitive data type in JavaScript, but it is not a valid primitive value
// function is often used to create reusable blocks of code
// function is created by calling the function keyword followed by a name and a set of parentheses  
let functionValue = function() { //function
    console.log("This is a function")
}   

// date is a special type of object that is used to represent dates and times
// date is a first-class object in JavaScript, meaning it can be treated like any other object
// date is a primitive data type in JavaScript, but it is not a valid primitive value
// date is often used to represent dates and times
let dateValue = new Date() //date

// regex is a special type of object that is used to represent regular expressions
// regex is a first-class object in JavaScript, meaning it can be treated like any other object
// regex is a primitive data type in JavaScript, but it is not a valid primitive value
// example of regex is used to match a pattern in a string
// regex is created by calling the RegExp() function or by using the /pattern/ syntax
// example : /[a-z]/ is a regex that matches any lowercase letter from a to z
let regexValue = /[a-z]/ //regex

//console.log(name, age, isStudent, hobbies, address, nullValue, undefinedValue, bigIntValue, symbolValue, functionValue, dateValue, regexValue)

// to check data type of a variable
console.log(typeof name) //string
console.log(typeof age) //number                
console.log(typeof isStudent) //boolean
console.log(typeof hobbies) //object
console.log(typeof address) //object
console.log(typeof nullValue) //object
console.log(typeof undefinedValue) //undefined
console.log(typeof bigIntValue) //bigint
console.log(typeof symbolValue) //symbol
console.log(typeof functionValue) //function
console.log(typeof dateValue) //date
console.log(typeof regexValue) //regex

/* CONSTANTS */
// Constants are variables that cannot be changed after they are declared
// Constants are declared using the const keyword

const PI = 3.14 //constant
const MAX_VALUE = 100 //constant
const MIN_VALUE = 0 //constant

console.log(PI, MAX_VALUE, MIN_VALUE)

/* VAR */
// Var is used to declare a variable that can be changed after it is declared
// Var is used in earlier versions of JavaScript, but it is not recommended for use in modern JavaScript

var nameVar = "John Doe" //string
var ageVar = 30 //number
var isStudentVar = true //boolean
var hobbiesVar = ["reading", "gaming", "coding"] //array
var addressVar = { //object
    street: "123 Main St",
    city: "New York",
    state: "NY"
}

console.log(nameVar, ageVar, isStudentVar, hobbiesVar, addressVar)
console.log(typeof nameVar) //string
console.log(typeof ageVar) //number                 
console.log(typeof isStudentVar) //boolean
console.log(typeof hobbiesVar) //object
console.log(typeof addressVar) //object

// Example of objects
let strawhat = {
    captain : "luffy",
    crew : "strawhat",
    rightHandMan : "zoro",
    leftHandMan : "sanji",
    otherCrew : ["nami", "robin", "franky", "brook", "chopper", "usopp"],
    ship : "thousand sunny",
}

// There are two ways to access the properties of an object
// 1. Dot notation
// 2. Bracket notation
console.log (strawhat.captain)
console.log (strawhat["crew"]) //strawhat
console.log (strawhat["rightHandMan"]) //zoro

// Note : To execute java script code in vs code console, we can use node and run the file using the 
// command "node filename.js"

// If we need to make it live, we can use nodemon and run the file using the
// command "nodemon filename.js"
// To install nodemon, we can use the command "npm install -g nodemon"


// adding values to the object
// There are two ways to add values to the object

// 1. Dot notation
// 2. Bracket notation

strawhat.friends = ["traffy", "bon clay", "ace", "shanks", "buggy", "vivi"] //adding new value to the object
strawhat["ship"] = "thousand sunny"

console.log(strawhat.friends) //new value
console.log(strawhat["ship"]) //thousand sunny

console.log (strawhat)