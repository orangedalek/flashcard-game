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

// get cards from js file and push them into basic card array

function pushBasicCards(){
    fs.readFile("basicCard.json", 'utf8', function (err,data) {
      data = JSON.parse(data); 
      for(var i = 0; i < data.length; i++) {
        var newBasicCard = new BasicCard();
        newBasicCard.front = data[i].front;
        newBasicCard.back = data[i].back;
        basicArray.push(newBasicCard);
        console.log(basicArray);
        // playBasic();
      }
    });
}

// play the basic cards

// function playBasic(){
// 	for (var i = 0; i < basic.length; i++) {
		
// 	}

// push cloze cards into array

// play clozed cards

// add basic cards (fron & back)

// add cloze cards (complete & cloze)

// give user a score














startGame();