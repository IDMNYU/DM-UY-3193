## Create an Express app that uses this source data to serve up a view on the front end. First try with EJS, then if time allows, try Handlebars and Pug.

* Make sure to create a project directory, install Express and your view dependency.
* Create a folder inside called views and create a file to render your views here.

For example, if using EJS:
* Create a new project directory called ejs-exercise and cd into it.
* Run npm init, answering the questions
* Install and save express and ejs
* Create a views directory
* Create a view called list.ejs in views to display a modified grocery list: display each store name as a heading with its respective list below in an unordered list

##### **sample data:**
``` const data = {
    groceries: [{
    store: 'Acme',
    list: [
        'strawberries',
        'blueberries',
        'yogurt'
    ]
    }, {
    store: 'Corner Market',
    list: [
        'baguette',
        'basil',
        'tomatoes'
    ]
    }]
};