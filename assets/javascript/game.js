var possible = ["red", "orange", "yellow", "grey", "gray", "green", "blue", "indigo", "purple"];
var correct = possible[Math.floor(Math.random() * 9)];
var lives = 10;
var win = 0;
var lose = 0;
var blanks = [];
var guesses = []
reset = function(){
        correct = possible[Math.floor(Math.random() * 9)];
        blanks = [];
        for (var b = 0; b < correct.length; b++) {
        blanks.push("_");
        document.getElementById("puzzle").innerHTML = blanks.join(" ");
        };
        lives = 10;
        document.getElementById("life").innerHTML = "Guesses Left: " + lives
        guesses = [];
        document.getElementById("guessed").innerHTML = "Already Guessed: ";
    
    };
reset();
document.onkeyup = function() {
    var input=event.key;
    if(guesses.includes(event.key) == false){
        guesses.push(event.key)
        document.getElementById("guessed").innerHTML = "Already Guessed: " + guesses.join(" ");
    if(correct.includes(event.key)){    
        for (var k = 0; k < correct.length; k++) {
            if(input == correct[k]){
            blanks[k] = input;
            document.getElementById("puzzle").innerHTML = blanks.join(" ");    
        }}
    }else if(lives > 0){
        lives--;
        document.getElementById("life").innerHTML = "Guesses Left: " + lives;
    }else{
    lose++;
    document.getElementById("losses").innerHTML = "Losses: " + lose;
    reset();
    };
    if(blanks.join("") == correct){
        win++;
        document.getElementById("wins").innerHTML = "Wins: " + win;
        reset();
        };
    };
};
