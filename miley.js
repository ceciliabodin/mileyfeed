/*
    miley.js
    An implementation of the MileyFeed project.
*/

// This code will be executed when the page finishes loading
window.addEventListener('load', function(){
    // Fill me in!
    var numTweets = 0;

    document.addEventListener('swagreceived', function(event){
	var username = event.handle;
	var text = event.text;
	// var pic event.profile_image_url;

	// we have an unordered list of Tweets
	var ul = document.getElementById('tweets');
	    
	// create a new li element for the Tweet, and append it

	var li = document.createElement('li');

	li.innerHTML = '<strong>' + event.handle + '</strong> ' + event.text;
	numTweets++;

	ul.insertBefore(li, ul.firstChild);

	if (numTweets > 30) {
		console.log("here");
		$('ul li:last').remove();
	}


	});

}, false);

// Add more supporting code here!



