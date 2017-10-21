// Requires jQuery
function Client(documentTarget){
	this.outputTarget = documentTarget;
	this.document = '';
}

Client.prototype.updateView = function(){
	this.outputTarget.html(this.document);
};

Client.prototype.broadcastReceived = function(clientId){

};