'use strict';

var basic = require('./basicCard.json');
var fs = require('fs');
var jsonfile = require('jsonfile');
var file = '/tmp/data.json'



function BasicCard(front, back){
	jsonfile.readFile('./basicCard.json', function(err, obj){
		// console.log(obj);
	})
	if(this instanceof BasicCard){
		this.front = front;
		this.back = back;
	}else{
		return new BasicCard(front, back);
	}
}

module.exports = BasicCard(this.front, this.back);
