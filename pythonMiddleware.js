var spawn = require("child_process").spawn;
var py = spawn("python",["analyzer.py"]);
var dataString = "NODEdataString...";

function sendData(inputs) {
	// Send Data
	py.stdin.write(JSON.stringify(inputs));
	py.stdin.end();


	// Receive Data
	py.stdout.on("data",function(data){
		dataString += data.toString();
		console.log("NODE...added data to dataString");
	});
	py.stdout.on("end",function(){
		console.log(dataString);
	});
};


module.exports = {
	sendData:sendData
}