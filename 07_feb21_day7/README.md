## Day 7

* Gallery walk to view and interact with audio players

* Learning Log Presentations

* Logistics you should know by now: 
    
    * Slack notifications
    
    * Turning in work on NYU Classes
    
    * Where to find info if you miss class or are unsure if homework is due

* JS callback functions/async JS

* INTRO TO NODE!

    * What is node?
    
    * Writing "Hello World"
    
    * Working with modules
    
* Exercise: 

Create a module for each of the following:

* Set Difference: Given two arrays of strings, produce a single array of items that are in one or the other but not both

* Set Intersection: Given two arrays of strings, produce a single array of unique items that are in both sets. 

* Create a file called app.js and include the following code. Feel free to change the items in the arrays if you like:


```
var setDifference = require('./set-difference.js');

var setIntersection = require('./set-intersection.js');

var set1 = ['dogs', 'cats', 'red', 'bananas', 'code', 'movies'];

var set2 = ['blue', 'horses', 'dogs', 'code', 'rain'];

var difference = setDifference(set1, set2);

var intersection = setIntersection(set1, set2);

//should print an array with cats, red, bananas, movies, blue, horses, rain as elements
console.log(difference);

//should print an array with dogs and code as elements
console.log(intersection);
```

### Homework

* For Tuesday: Set up a dummy Twitter account. You will have to set it up with a different email address than your main Twitter account if you already have one. We are going to use this as our Twitterbot, and each account will have its own unique API key. After creating your account, you will need to visit https://developer.twitter.com and apply for an access token. Make sure you fill out all fields, but you can indicate in all places possible that this is FOR EDUCATION! Do this a few days in advance of Tuesday's class in case there is a delay in the approval process.

* Read [The Only node.js Introduction You Will Ever Need](https://codeburst.io/the-only-nodejs-introduction-youll-ever-need-d969a47ef219)

* Read [Writing Neat Asynchronous Node JS Code with Promises](https://medium.com/dev-bits/writing-neat-asynchronous-node-js-code-with-promises-32ed3a4fd098)

* Do a Learning Log if you need clarity on anything from this week! Some suggestions:

    * node.js
    
    * asynchronous javascript/callback functions
    
    * (possibly?) promises

