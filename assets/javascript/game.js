
//Javascript of Letter Guessing Game

// Variables
 var guesses = 0;
 var maxGuessesAllowed = 9;
 var guessesLeft = 9;
 var winTotal = 0;
 var lossTotal = 0;
 var message = "Guess what letter I'm thinking of";
 var letters = [
             "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
             "p","q","r","s","t","u","v","w","x","y","z"
             ];

 var letterToGuess = "";
 var higherOrLower = "";
 var lettersGuessed;
 var gameOver = false;


// Initializing Variables
initGame();

function initGame() {
    var letterIndex = Math.floor(Math.random() * letters.length);
    letterToGuess = letters[letterIndex];
    guesses = 0;
    maxGuessesAllowed = 9;
    guessesLeft = 9;
    winTotal = 0;
    lossTotal = 0;
    lettersGuessed = [];
    gameOver = false;
    window.addEventListener("keyup",eventKeyPressed,true);
    drawScreen();
}
    

function eventKeyPressed(e) {
    if (!gameOver) {
        var letterPressed = String.fromCharCode(e.keyCode);
        letterPressed = letterPressed.toLowerCase();
        guesses++;
        lettersGuessed.push(letterPressed);

        if (letterPressed == letterToGuess) {
            gameOver = true;
        } else {

            letterIndex = letters.indexOf(letterToGuess);
            guessIndex = letters.indexOf(letterPressed);
            Debugger.log(guessIndex);
            if (guessIndex < 0) {
                higherOrLower = "That is not a letter";
            } else if (guessIndex > letterIndex) {
                higherOrLower = "Lower";
            } else {
                higherOrLower = "Higher";
            }

        }
        drawScreen();
        }
    }



    function drawScreen() {
        //Background
        context.fillStyle = "#ffffaa";
        context.fillRect(0, 0, 500, 300);
        //Box
        context.strokeStyle = "#000000";
        context.strokeRect(5,  5, 490, 290);
        context.textBaseline = "top";
        //Message
        context.fillStyle = "#FF0000";
        context.font = "14px _sans";
        context.fillText  (message, 125, 30);
       //Wins
        context.fillStyle = "#109910";
        context.font = "16px _sans";
        context.fillText  ('Wins: ' + guesses, 215, 50);
        //Losses
        context.fillStyle = "#109910";
        context.font = "16px _sans";
        context.fillText  ('Wins: ' + guesses, 215, 50);
        //GuessesLeft
        context.fillStyle = "#109910";
        context.font = "16px _sans";
        context.fillText  ('Guesses: ' + guessesLeft, 215, 50);
 
 
        //Letters Guessed
        context.fillStyle = "#FF0000";
        context.font = "16px _sans";
        context.fillText  ("Letters Guessed: " + lettersGuessed.toString(), 10, 260);
        if (gameOver) {
           context.fillStyle = "#FF0000";
           context.font = "40px _sans";
           context.fillText  ("You Got It!", 150, 180);
        }
    }
}