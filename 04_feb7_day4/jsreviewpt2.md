### A note on Equality

*All people should be offered equal rights.*

Aside from that, Javascript deals with equality a little differently than other programming languages. 

When using triple equals === in JavaScript, we are testing for strict equality. This means both the type and the value we are comparing have to be the same.

So, 

```javascript
5 === 5 //returns true

'this class is awesome' === 'this class is awesome' //also returns true

```
But,

```javascript
77 === '77' // returns false

77 == '77' //returns true because of type coercion when there are only two ==. JavaScript will actually try to convert our values into a like type.
```


### Callback functions
Javascript is frequently **asynchronous**. This means that multiple things can be happening at once, and that code is NOT ALWAYS executed in the order that its written in.

For example, the ```setTimeout``` function will execute a chunk of code after a certain amount of time elapses. It takes two parameters: one, a function to execute, two the amount of time to wait before executing. Here are two ways of writing the same thing:

```javascript

function sayHi() {
	alert("Hi");
}

setInterval(sayHi, 1000); // call sayHi() after one second.


// do that same thing, but with an "anonymous" (unnamed function) instead
setInterval(function(){
	alert("Hi!!");
}, 1000);
```

Notice how in that second example we just stick a whole function definition inside the call to setInterval. This is a pattern you will see and use all the time.

For example, in DOM event listeners.

```javascript
document.body.addEventListener("click", function(e) {
	alert("You clicked on the page");
});
```

## Objects

Objects are key/value pairs. The keys are string-like, and the values can be anything.

```javascript
var person = {}; // an empty object

// declaring an object with some values
var person = {
	firstName: "Sarah",
	lastName: "Dahnke"
}

// access a value
person.firstName // returns "Sarah"

// another way to access a value
person["firstName"]

// modify an existing value, or create a new one:
person.firstName = "Sarah Rose";

person.gender = "Female";

// stick a an array in there
person.favoriteBooks = ["Moby Dick", "The Man Without Qualities", "Magic Mountain", "War and Peace"]

// stick another object in there
person.computer = {
	brand: "Mac",
	model: "Air",
	year: 2017
};

// stick a function in there
person.getFullName = function() {
	return this.firstName + " " + this.lastName;
}

person.getFullName(); // returns a string with Sarah Rose Dahnke
```

Notice how we can define an object and then after add properties to it that include arrays, other objects and functions. If we were to define this object all in one go, it would look like this:

```javascript
var person = {
	firstName: "Sarah",
	lastName: "Dahnke",
	gender: "female",
	
	favoriteBooks: ["Moby Dick", "The Man Without Qualities", "Magic Mountain", "War and Peace"],
	
	computer: {
		brand: "Mac",
		model: "Air",
		year: 2017
	},
	
	getFullName: function() {
		return this.firstName + " " + this.lastName;
	}
}

```
NOTE: don't forget to put a ```,``` after each value or your code will break.


### Object Oriented Programming
All JavaScript objects inherit properties and methods from a prototype.

```javascript
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.city = "Brooklyn";
```

The JavaScript prototype property also allows you to add new methods to objects constructors:

```javascript
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};
```
You can also create new instances of an object:

```
var myFather = new Person("John", "Doe", 50, "blue");

console.log(myFather) //prints the information included inside of the new myFather object
```


## What is "this"?
You may have noticed that in the object examples we used the ```this``` keyword. ```this``` can be a difficult concept to explain. I think the best way of looking at it is as **context**. If you use ```this``` within an object method, ```this``` will equal the object itself. If you use ```this``` outside an object method, ```this``` will equal the global or window context.

It can become very confusing because ```this``` will sometimes NOT be what you are expecting. We'll come back to this topic at a later date!
