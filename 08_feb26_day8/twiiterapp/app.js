console.log("The bot is starting!");

var Twit = require('twit');

var config = require('./config.js');

var T = new Twit(config);

//data.statuses access to the statuses array

//for loop to pull out text from each individual tweet

//refer to .text to get the actual text

// T.get('search/tweets', { 
// 	q: 'banana since:2011-07-11', 
// 	count: 10 }, 
// 	function(err, data, response) {
//     for (var i = 0; i<data.statuses.length; i++){
//     console.log(data.statuses[i].text)
// 	}
// })

// T.post('statuses/update', { 
// 	status: 'hello world!' 
// }, 

// function(err, data, response) {
//   console.log(data)
// })

// write a function that includes an array of tweets that we compose
//randomly select a tweet from the array
//post on an interval
//could include a callback function inside T.post('statuses/update' to verify if the tweet posted



setInterval(tweets, 20000);

//Egret's way
const tweets = (ts = ["A Star Is Born", "Black Panther", "Blackklansman", "Green Book", "The Favourite", "Vice", "Bohemian Rhapsody"]) => {
    const randomInd = Math.floor(Math.random()*ts.length);
    T.post('statuses/update', { status: ts[randomInd] }, function(err, data, response) {
        console.log(`posted ${ts[randomInd]}`);
      })
}

//callback to check if it tweeted
// T.post('statuses/update', tweet, didIttweet);

//     function didIttweet(err, data, response){
//         if (err){
//             console.log("it didn't work");
//         }else{
//             console.log("it worked!");
//         }
//     }

// };


















