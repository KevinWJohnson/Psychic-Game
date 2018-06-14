
//Javascript of Letter Guessing Game

// Variables

var userWinsSelect = document.getElementById("user-wins");
var userLossesSelect = document.getElementById("user-losses");
var userGuessesLeftSelect = document.getElementById("user-guesses-left");
var userGuessesSoFarSelect = document.getElementById("user-guesses-so-far");

userWinsSelect.textContent = 0;
userLossesSelect.textContent = 0;
userGuessesLeftSelect.textContent = 9;
userGuessesSoFarSelect.textContent = "";

var maxGuessesAllowed = 9;
var guesses = 0;
var guessesTotal = 9;
var guessesLeft = 9;
var winTotal = 0;
var lossTotal = 0;

var lettersGuessed = [];
var letterToGuess;

var letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// The Psychic Game image
myImg.src = "assets/images/The_Psychic_Game.PNG";

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // The Psychic Game image
    myImg.src = "assets/images/The_Psychic_Game.PNG";

    // Determines which key was pressed.
    var letterPressed = event.key;


    // Making Lower case for comparison
    letterPressed = letterPressed.toLowerCase();

    // Checks that the key pressed is a letter
    guessIndex = letters.indexOf(letterPressed);


    if (guessIndex >= 0) {
        if (guesses === 0) {
            // Randomly chooses a choice from the options array. This is the Computer's letter guess.
            letterToGuess = letters[Math.floor(Math.random() * letters.length)];
        }

        // Increments guesses
        guesses++;

        // Putting letter pressed into lettersGuessed array
        lettersGuessed.push(letterPressed);
        var lettersGuessedString = lettersGuessed.toString();


        console.log("letterPressed: " + letterPressed)
        console.log("letterToGuess: " + letterToGuess)

        // Comparing letter pressed to letter to guess
        if (letterPressed === letterToGuess) {
            userWinsSelect.textContent = winTotal++;
            guesses = 0;
            lettersGuessed = [];
            lettersGuessedString = "";
            myImg.src = "assets/images/You_Win.PNG";
        }

        // Comparing current guesses to number of guesses allowed
        if (guesses === guessesTotal) {
            userLossesSelect.textContent = lossTotal++;
            guesses = 0;
            lettersGuessed = [];
            lettersGuessedString = "";
            myImg.src = "assets/images/You_Lose.PNG";
        }

        // Writing to HTML page
        userWinsSelect.textContent = winTotal;
        userLossesSelect.textContent = lossTotal;
        guessesLeft = guessesTotal - guesses;
        userGuessesLeftSelect.textContent = guessesLeft;
        userGuessesSoFarSelect.textContent = lettersGuessedString;

    } else {
        alert("That is not a letter");
    }
}