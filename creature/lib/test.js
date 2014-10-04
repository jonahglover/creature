AbstractFilter = require('./AbstractFilter.js');

requestFilter = AbstractFilter;

urls = ["google.com","facebook.com","yelp.com"];

requestFilter.addRule("popular", function(url){
	if(url == "google.com"){
		return false;
	}else{
		return true;
	}
});

console.log(requestFilter.filter(urls));

