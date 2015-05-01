var Twitter = require('twitter');
var Firebase = require('firebase');

var myFirebaseRef = new Firebase("https://commiserator.firebaseio.com/");
 
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var params = {screen_name: 'markofmac'};

var ingest = function(){
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      myFirebaseRef.set(tweets);
    } 

    if (error) {
      console.log(error);
    }
  });  
}

module.exports = ingest;