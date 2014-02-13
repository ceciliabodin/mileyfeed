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
	// var pic event.profile_image_url;

		// we have an unordered list of Tweets
	var ul = document.getElementById('tweets');
	    
	// create a new li element for the Tweet, and append it

	var li = document.createElement('li');

	li.innerHTML = '<strong>' + event.handle + '</strong> ' + event.text;

	ul.insertBefore(li, ul.firstChild);

	if (ul.length > 25) {
		ul.pop();
	};	


// var node=document.getElementById("myList2").lastChild;
// var list=document.getElementById("myList1");
// list.insertBefore(node,list.childNodes[0]);

	// $('ul').onLoad(function(){

	// window.scroll(0,300);

	// });

	// $(document).ready(function(){
 //    $('#tweet_container').scrollTop($('ul li').last().position().top + $('ul li').last().height());
	// });


	// var list = document.getElementById('ul');
 //  	list.scrollBottom = list.scrollHeight;

});



var elem = document.getElementById('data');
  elem.scrollTop = elem.scrollHeight;