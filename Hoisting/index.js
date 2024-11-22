// Explain the difference in hoisting behavior between var, let, and const with an example.
// How would you demonstrate these differences in a real-world use case?

// Answer:
// Hoisting with 'var': declaration of variables with 'var' are hoisted top of their function scope
// and initialized as undefined.

// Example:
// console.log(a); // undefined
// var a = 1;

// Hoisting with 'let/const': declaration of variables with let and const are  block-scoped and hoisted but not initialized
// till we assign any value thats why it will returen reference error. and remain in a temporial dead zone till we initialize.

// Example:
// console.log(a); // Reference Error
// let a = 1;
// console.log(b); // Reference Error
// const b = 1

//------------------------------------------------------------------------------------

// What will the following code output, and why?
// console.log(a); // undefined
// var a = 10;
// let b = 20;
// console.log(b); // 20

// Answer:
// 'a' will print undefined Beacuse in js only the declaration of variale are hoisted at the top of the
// scope and initialize as undefined. while 'b' will print 20 as variable with 'let' is only hoisted not
// initialize but here we are accessing it after initializing

//---------------------------------------------------------------------------------------------------

// Modify the code so that it doesn’t throw an error or print undefined.

var a = 10;
console.log(a); // 10

let b = 20;
console.log(b); // 20

// Write a function that demonstrates hoisting by declaring both a function and a variable with the same
// name. Explain the output when the function is called.

function Hoisting() {
  console.log(myVar); // return function because functions are hoisted first
  var myVar = 10; // declare and initialization of variable is hoisted
  console.log(myVar); // the variable `myVar` has been initialized to 10, so this prints 10.
  function myVar() {
    console.log("I'm a function!");
  }
  console.log(myVar); // still prints 10 because functions are hoisted before variables
}

Hoisting();

// What is the scope of variables declared with var, let, and const when used inside loops?
// Provide an example that uses hoisting to illustrate your explanation.

// Loop with var 
for (var i = 0; i < 3; i++) {
  console.log(i); // Prints 0, 1, 2 in the loop
}
console.log(i); // Prints 3 because i is function-scoped so it is accessible outside the loop.

// Loop with let 
for (let i = 0; i < 3; i++) {
  console.log(i); // Prints 0, 1, 2 in the loop
}
console.log(i); // Error: i is not defined outside the loop because let is block scoped.

// Loop with const 
for (const i = 0; i < 3; i++) {
  console.log(i); // Error: Cannot reassign to i because const is block scoped and immutable.
}
console.log(i); // Error: i is not defined outside the loop because const is block-scoped.


// How does function expression hoisting differ from function declaration hoisting? Write code to demonstrate the difference.


// Function Declaration 
console.log(Func1());  // Works fine, prints "I am declared!" as function are hoisted and initialized as it defined.
function Func1() {
  return "I am declared!";
}

// Function Expression 
console.log(Func2()); // Error: Cannot call Func2 before initialization.
// only the variable declaration is hoisted, not the assignment of the function to the variable.

var Func2 = function() {
  return "I am an expression!";
};
