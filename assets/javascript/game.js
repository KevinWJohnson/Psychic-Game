
//Javascript of Letter Guessing Game

// Variables

var userWinsSelect = document.getElementById(user-wins);
var userLossesSelect = document.getElementById(user-losses);
var userGuessesLeftSelect = document.getElementById(user-guesses-left);
var userGuessesSoFarSelect = document.getElementById(user-guesses-so-far);

userWinsSelect.textContent = 0;
userLossesSelect.textContent = 0;
userGuessesLeftSelect.textContent = 9;
userGuessesSoFarSelect.textContent ="";

var maxGuessesAllowed = 9;
var guesses = 0;
var guessesLeft = 9;
var winTotal = 0;
var lossTotal = 0;


var letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];




// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var letterPressed = event.key;

    console.log(letterPressed);

    // Making Lower case for comparison
    letterPressed = letterPressed.toLowerCase();

    // Checks that the key pressed is a letter
    guessIndex = letters.indexOf(letterPressed);
    if (guessIndex < 0) {
        alert("That is not a letter");

        // Randomly chooses a choice from the options array. This is the Computer's letter guess.
        var letterIndex = letters[Math.floor(Math.random() * letters.length)];
        var letterToGuess = letters[letterIndex];

        // Reseting Variables       
        guesses = 0;
        guessesLeft = 9;
        winTotal = 0;
        lossTotal = 0;

        // This loops thru the number guess allowed
        for (guessesLeft = maxGuessesAllowed; guessesLeft > 0; guessesLeft--) {

            guesses++;
            lettersGuessed.push(letterPressed);
            var lettersGuessedString = lettersGuessed.toString();

            if (letterPressed === letterToGuess) {
                userWinsSelect.textContent = winTotal++;
            }

            if (guessesLeft === 1) {
                userLossesSelect.textContent = lossTotal++;
            }

            userGuessesLeftSelect.textContent = guessesLeft;
            userGuessesSoFarSelect.textContent = lettersGuessedString;
        }    
    } 
}