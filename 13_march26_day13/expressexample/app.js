console.log('the server is running');

//requring express
const express = require('express');
//express is a function you can call
const app = express();

//opens up our listening port with a callback that includes a console.log
const server = app.listen(3000, listening);

function listening(){
	console.log('listening on port 3000');
}

//creating a route at localhost:300/hello
app.get('/hello', sayHello);

function sayHello(request, response){
	response.send('Helll0')//what you are sending back to that route
}

//creating a variable route
app.get('/hi/:database', sayHi);

function sayHi(request, response){
//when we visit the hi route, we can enter a name and be greeted
	const data = request.params;
	response.send('Hi, ' + data.database + ' How are you?')
}

//you can chain variables

//create a route that extends /hi that multiplies the amount of times the response is sent/printed

//this third route will have 2 variables



app.get('/hi/:database/:ctr',sayHi);

function sayHi(request ,response){
 let data = request.params;
 console.log(data);
 let mes = ''
 for (var i = 0; i < data.ctr; i++) {
   mes += 'HI '+ data.database ;
 }
 response.send(mes);
}








