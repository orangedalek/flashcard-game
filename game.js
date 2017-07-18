'use strict';
var inquirer = require("inquirer");
var fs = require("fs");
var jsonfile = require('jsonfile');
var basicjson = require("./basicCard.js");
var clozejson = require("./clozeCard.js");
var BasicCard = require("./basicCard.js");
var ClozeCard = require("./clozeCard.js");
var newBasicCard = new basicCard.BasicCard;
var newClozeCard = new clozeCard.ClozeCard;


var basic = [];
var cloze = [];

function startGame(){
	inquirer.prompt([
	{
		name: "options",
		type: "list",
		message: "Welcome to the flashcard lounge, what would you like to do?",
		choices: ["play basic cards", "play cloze cards", "create new cards", "exit"]
	}

		]).then(function(answer){
		switch(answer.options){
			case "play basic cards":
				playBasic();
				break;
			case "play cloze cards":
				playCloze();
				break;
			case "create new cards":
				createMenu();
				break;
			case "exit":
				console.log("Bye!")
				break;
		}
	});
}

function playBasic(){

		this.getData = function(){
		fs.readFile("./user.txt", "utf8", function(err, data){

			if(err){
				console.log(err);
			}else{
				console.log(data);
			}
		})

	}
	jsonfile.readFile("./basicCard.json", function(err, data){
	inquirer.prompt([
	{
		name: "question",
		type: "input",
		message: "data.front"
	}
	]).then()
	})
	}














startGame();