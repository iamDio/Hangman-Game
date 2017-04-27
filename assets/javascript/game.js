<!-- 	//GOT theme.
//press anykey to get started. onkey event listener that records key strokes.

//var letters = [] < is this necessary ? 
//var solution 
//var puzzle - - - - - - 
//var guessesLeft
//var guessed
//var wins 
//var losses
//var randomWord []

//if key hit by the user matches puzzle letter, display letter on solution
//else dispaly letter on guessed letter, updated guesses left -->

/*
document.onkeydown = function(event) {}
//if guessesLeft =0 display you loose screen "You know nothing Jon Snow" , losses += 1
var randomWord = ['word1', 'word2','word3','word4'];
var wins =0;
var losses=0;

 var puzzle = function() {
 var myName= randomWord[Math.floor(Math.random()*5)];
 console.log(myName);
}*/

window.onload = function() {
        //event listener for key press
        //load puzzle , display randomWord.length to user with a "-" string for each letter 
        //document.querySelector("#loadPuzzle").textContent = 
    };


    var randomWord = [' Stark', 'Lannister', 'Tyrell', 'Baratheon'];
    var wins = 0;
    var losses = 0;

    document.onkeyup = function(event) {
        var userGuess = event.key;
 	//record each time a key is pressed.
     }

/*	function guessedLetter() { replace - with guessed letter
    var str = document.querySelector("#word").textContent; 
    var res = str.replace("dashes","correct letter");
    document.querySelector("#word").textContent = res;
}
*/
    var wordChoice = function() {
        return randomWord[Math.floor(Math.random() * randomWord.length)];
        console.log(wordChoice);
    };
    var word = wordChoice();
    console.log(word);
    document.querySelector('#word').textContent = word;