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

// API Calls
function getUserTimeline(screen_name,count,error,success) {
	twitter.getUserTimeline({
		screen_name:screen_name,
		count:count
	}, error, success);
};


module.exports ={
	getUserTimeline:getUserTimeline
}

