/*
    miley.js
    An implementation of the MileyFeed project.
*/

// This code will be executed when the page finishes loading
window.addEventListener('load', function(){
    // Fill me in!

}, false);

// Add more supporting code here!

document.addEventListener('swagreceived', function(event){
	var username = event.handle;
	var text = event.text;

		// we have an unordered list of Tweets
	var ul = document.getElementById('tweets');
	    
	// create a new li element for the Tweet, and append it
	var li = document.createElement('li');
	li.innerHTML = '<strong>' + event.handle + '</strong> ' + event.text;
	ul.insertBefore(li);


	// if (ul.length > 25) {
	// 	delete last li child
	// }

})



var elem = document.getElementById('data');
  elem.scrollTop = elem.scrollHeight;