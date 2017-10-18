// Requires jQuery
function Server(outputTarget, debugTarget){
	// DOM element where to output the server document
	this.outputTarget = outputTarget;

	// DOM element where to output debug information
	this.debugTarget = debugTarget;
}

Server.prototype.eventRaised = function(clientId, operation, position, value){
	var debugLine = '<div class="debug-line">Event raised: Client' + clientId
		+ ' ' + operation
		+ ' @ ' + position
		+ ' : "' + value
		+ '"</div>';
	this.debugTarget.append(debugLine);
};