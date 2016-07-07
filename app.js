var twitter = require("./twitter.js");
var pythonMiddleware = require("./pythonMiddleware");

var data = twitter.getUserTimeline("eltonlawls",4,onError,onSuccess)






// DATA CALLBACKS

//Error Callback
function onError(err,response,body) {
	console.log(err);
};
//Success Callback
function onSuccess(data) {
	var parsedData = JSON.parse(data);
	var i = 0;
	pythonMiddleware.sendData(parsedData)
};


