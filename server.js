// Requires jQuery
function Server(outputTarget, debugTarget){
	// DOM element where to output the server document
	this.outputTarget = outputTarget;

	// DOM element where to output debug information
	this.debugTarget = debugTarget;

	this.clients = []; // Array of int
	this.document = '';
}

Server.prototype.clientConnected = function(clientId){
	var debugLine = '<div class="debug-line">Client ' + clientId + ' connected</div>'
	this.debugTarget.append(debugLine);
	this.clients.push(clientId);
};

Server.prototype.eventRaised = function(clientId, operation, position, value){
	var debugLine = '<div class="debug-line">Event raised: Client' + clientId
		+ ' ' + operation
		+ ' @ ' + position
		+ ' : "' + value
		+ '"</div>';
	this.debugTarget.append(debugLine);

	if (operation == 'typeCharacter'){
		this.document = [this.document.slice(0, position), value, this.document.slice(position)].join('');

		// Show the state of the document in the server output window
		this.outputTarget.text(this.document);
	}
};

Server.prototype.broadcast = function(clientId, operation, position, value){

};