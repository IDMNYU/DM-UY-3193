var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');

//required if using body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index')
});

app.post('/', function(req, res){
    res.render('index')
    console.log(req.body.city);
})

app.listen(3000, function(){
    console.log('app is running on port 3000')
})