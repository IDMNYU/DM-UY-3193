var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://inclassappspring.firebaseio.com"
});

var db = admin.database();

var ref = db.ref('users');

ref.once('value', function(snapshot){
	console.log(snapshot.val())
})

//write data to the database
//.set is a firebase function that will overwrite data in our db
//.push allow us to write sets of data with unique entries
//.update allows you to update specific attributes

ref.set({
  alanisawesome: {
    date_of_birth: "June 26, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
});




