# Javascript Review

## Variables

We declare variables with the ```var``` keyword. You don't need to declare variable type, it's inferred.

```javascript
var name; 				// declare an empty variable
name = "Sarah";				// define it

// You can also declare and define in a single line

var name = "Sarah"; 		// a string
var onePlusOne = 2; 	// an integer
var sortofPI = 3.1415; 	// a float
var thisIsFun = true; 	// a boolean
```

NOTE: Javascript will NOT complain if you don't have the ```var``` keyword. But NEVER do this because it will put that variable in the global scope.

To further confuse things, let's introduce the ES6 way of declaring variables. The short answer is this: ```const``` before ```let```, ```let``` before ```var```. Prioritise read-only variables within your code. This reduces the risk of accidental reassignments and unintentional value changes. 

To read more on the difference between these definitions [click here](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75) or [here](https://codeburst.io/const-let-and-var-which-and-when-541a2721c18)

```const``` is short for constant. Variables assigned with ```const``` are: 

* read-only

* cant’ be redeclared or reassigned

Variables assigned with ```let``` are very similar to those defined with ```var```. The major difference is scope. Variables assigned with ```let``` have block scope. This means the variable can be seen within that block and any sub-blocks. Variables assigned with ```var``` have functional scope and ignore block scoping rules.

```javascript
// define MY_FAV as a constant and give it the value 7
const MY_FAV = 7;

// this will throw an error - Uncaught TypeError: Assignment to constant variable.
MY_FAV = 20;

// MY_FAV is 7
console.log('my favorite number is: ' + MY_FAV);

// trying to redeclare a constant throws an error -  Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
const MY_FAV = 20;

// the name MY_FAV is reserved for constant above, so this will fail too
var MY_FAV = 20;

// this throws an error too
let MY_FAV = 20;

```
compared to:

```javascript

function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

```


In almost all cases, opt for ```const``` first. You want the majority of your assignments to be read-only in order to avoid potential issues down the line. Only use the ```let``` keyword when you know that a variable will have a dynamic value.


## Strings
```javascript
var firstName = "Sarah";
var lastName = "Dahnke"

// concatenate strings
var fullName = firstName + " " + lastName; // returns "Sarah Dahnke"

// access a character of a string
var secondLetter = fullName[1];
```

## Arrays

An array is a list of variables, numerically indexed starting with 0. In javascript we can put variables of any type into an array, and we can mix and match.

```javascript
var myList = []; // An empty array

// declaring a populated array
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// Get the first element in an array
var firstDay = days[0]; // returns "Monday"

// Get the last element in an array
var lastDay = days[days.length-1] // returns "Friday

// Get the length of an array
var totalDays = days.length; // returns 5

// Add something to the end of an array
days.push("Saturday");

// loop through an array and print it's values
for (var i = 0; i < days.length; i++) {
	console.log(days[i]);
}
```

## Functions

```javascript
function sayHi() {
	console.log("Hello");
}

sayHi() // will print "Hello" and return "undefined"


// adding a parameter
function sayHi(name) {
	var message = "Hello " + name;
	console.log(message);
}

sayHi("Sam");

// return values
function sayHi(name) {
	var message = "Hello " + name;
	return message;
}

var helloMessage = sayHi("Sam");
```

### Functions can contain control flow

Conditional statements can create decision making inside of your program.

```javascript 
function virtualDoor(doorName) {
    if ( doorName === 'tacos') {
        console.log('yummy tacos');
    } else if (doorName === 'pizza') {
        console.log('yay pizza')
    } else if ( doorName === 'McDonalds') {
        console.log('no bueno');
    } else {
        console.log('im hungry');
    }
};

virtualDoor('pizza') // prints 'yay pizza' to the console; changing the parameter will print the console statement that pertains to that parameter
```


### Functions are variables

Functions also act like variables, so we can declare them like variables

```javascript
var multiplier = function(number1, number2) {
	return number1 * number2;
}
multiplier(2, 5) // returns 10

var subtractor = function(number1, number2) {
	return number1 - number2;
}
subtractor(5, 3) // returns 2
```

Because functions act like variables, we can pass them around to other functions. We do this by using their name WITHOUT the parenthesis. Here's a totally useless example of this in action

```javascript
function doAMathThing(number1, number2, mathFunction) {
	var result = mathFunction(number1, number2);
	return result;
}

doAMathThing(7, 4, subtractor) // returns 3

doAMathThing(7, 4, multiplier) // returns 28

```

The ability to pass functions to other functions is a key feature of javascript, and used constantly. Specifically, in callback functions...


