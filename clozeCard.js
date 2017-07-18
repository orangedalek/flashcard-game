'use strict';

var cloze = require("./clozeCard.json");
var jsonfile = require('jsonfile');
var file = '/tmp/data.json'

function ClozeCard(complete, cloze){
	jsonfile.readFile('./clozeCard.json', function(err, obj){
		console.log(obj);
	})
	if(this instanceof ClozeCard){
		this.complete = complete;
		this.cloze = cloze;
	}else{
		return new ClozeCard(complete, cloze);
	}
}

module.exports = ClozeCard;

