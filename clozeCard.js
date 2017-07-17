var cloze = require("./cloze.JSON");

function ClozeCard(complete, cloze){
	this.complete = complete;
	this.cloze = cloze;
}

module.exports = ClozeCard;