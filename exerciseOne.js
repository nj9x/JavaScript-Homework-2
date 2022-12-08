console.log("===Concatenation Homework===")
var firstName = prompt("Hello, what is your name?");
var lastName = prompt("What about your surname?");
var initialGreet = "Hello my name is:";
var greeting = firstName+ " " + lastName;
console.log(initialGreet + greeting);

console.log("===Interpolation Homework===")
var name = prompt("Hello, what is your name?");
var surname = prompt("What about your surname?");
var helloGreeting = (`Hello my name is ${name} ${surname}`);
console.log(helloGreeting);
