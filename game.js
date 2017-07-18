'use strict';
var inquirer = require("inquirer");
var fs = require("fs");
var jsonfile = require('jsonfile');
var basicjson = require("./basicCard.json");
var clozejson = require("./clozeCard.json");
var BasicCard = require("./basicCard.js");
var ClozeCard = require("./clozeCard.js");
var basicArray = [];
var clozeArray = [];
// code from stack overflow to fix weird bug
require('events').EventEmitter.prototype._maxListeners = 100;


// use inquirer to find out what the user wants to do: play basic cards, cloze cards, create new cards, or quit

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
				pushBasicCards();
				break;
			case "play cloze cards":
				pushClozeCards();
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

// get cards from js file and push them into basic card array

function pushBasicCards(){
    fs.readFile("basicCard.json", 'utf8', function (err,data) {
      data = JSON.parse(data);
      
      // console.log(data);
      for(var i = 0; i < data.length; i++) {
        // var newBasicCard = new BasicCard;
        // front = data[i].front;
        // back = data[i].back;
        basicArray.push(data[i]);
      }
        // console.log(basicArray);
        playBasic();
    });
}

// play the basic cards

function playBasic(){
	for (var j = 0; j < basicArray.length; j++) {

		var question = basicArray[j].front;
		inquirer.prompt([
		{
			name:"flashcard",
			type: "input",
			message: question
		}

		]).then(function(response){
			if(response.flashcard == basicArray[j].back){
				console.log("Correct!");
				score ++;
			}else{
				console.log("That's incorrect, the correct answer was " + basicArray[i].back);
			}
		})
		}
	}

// push cloze cards into array
function pushClozeCards(){
    fs.readFile("clozeCard.json", 'utf8', function (err,data) {
      data = JSON.parse(data); 
      for(var i = 0; i < data.length; i++) {
        var newClozeCard = new ClozeCard();
        newClozeCard.complete = data[i].complete;
        newClozeCard.cloze = data[i].cloze;
        clozeArray.push(newClozeCard);
        // console.log(clozeArray);
        playCloze();
      }
    });
}

// play clozed cards

// if user wants to add cards, have them pick basic or cloze

// add basic cards (fron & back)

// add cloze cards (complete & cloze)

// give user a score














startGame();