var Twitter = require("twitter-node-client").Twitter;
var authCodes = require("./authenticationCodes.js").twitter;

var config = {
	"consumerKey":authCodes.consumerKey,
	"consumerSecret":authCodes.consumerSecret,
	"accessToken":authCodes.accessToken,
	"accessTokenSecret":authCodes.accessTokenSecret,
	"callBackUrl":authCodes.callBackUrl
};
var twitter = new Twitter(config);

//Error Callback
var error = function (err,response,body) {
	console.log(err);
};
//Success Callback
var success = function(data) {
	var parsedData = JSON.parse(data);
	var i = 0;
	while(parsedData.length > i ) {
		console.log(parsedData[i].text);
		i++
	};
};
// API Calls
twitter.getUserTimeline({screen_name:"eltonlawls",count:"4"}, error, success);

