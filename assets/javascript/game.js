// My pre-game plan was as followerd:

// make an array of random words that can appear.
// have to find a way to get computer to guess a word
// need to display how many letters there are
// user has to guess a letter
// user has only so many tries
// must set a condition if user loses
// must set a condition if user wins

// below are just some variables to appear on the page.

var Guesses = 7;

var Wincount = 0;

var Losecount = 0;

var Letters = [];


document.getElementById("Guess").innerHTML = Guesses;
document.getElementById("Wins").innerHTML = Wincount;
document.getElementById("Losses").innerHTML = Losecount;
document.getElementById("Attempts").innerHTML = Letters;

// created the whole game as one function so we can recall the function within itself and restart the game.

function game() {

    // this is the array letters that was made to check if player is typing in letters or not.

    var letterarr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


    // list of possible bands
    var bandsarray = ["nirvana", "soundgarden", "weezer", "oasis", "meticalla", "radiohead", "bush", "korn", "cranberries", "everclear"]; 
    
    // formula for choosing a random band.
    var choice = bandsarray[Math.floor(Math.random() * bandsarray.length)];
    
    // create an array of the random band. This will be used to reference if the player typed a letter in the band name.
    var band = choice.split('');
    
    // need to create a variable for the remaining amount of letters for the word chosen to set win condition.
    var remaining = choice.length;
    
    // created an empty array for answer.
    var answer = [];
    
    // we made i be the length of whatever word was chosen.
    for (var i = 0; i < choice.length; i++) {
        // here, we placed i in the answer array, and then made it so that each character is an underline. 
        // since i is going to be the lenght of the band chosen, it will match the same amount of underline characters.
        answer[i] = "_";
        }
    
    // telling the webpage to display the answer array, using join command to leave out commas.
    document.getElementById("displayanswer").innerHTML = answer.join(' ')
    
    // have events start at the action of pressing a key
    document.onkeyup = function(event) {
        
        // make sure all letters are lowercase
        var letter = event.key.toLowerCase();
    
        // if player hits a key not in the letter array, nothing further happens.
        if (letterarr.includes(letter) === false) {
               }
        
        // if guesses equal 0, the game is set to restart. This was made so the game will restart when the player presses a key.
        else if (Guesses === 0) {
                Guesses = 7
                Letters = []
                document.getElementById("Guess").innerHTML = Guesses;
                document.getElementById("Attempts").innerHTML = Letters;
                document.getElementById("win/lose").innerHTML = ""
                return game(); // this is recalling the function for when the game ends.
                }
        
        // if remaining letters equal zero, player wins
        else if (remaining === 0) {
                Guesses = 7
                Letters = []
                Wincount++;
                document.getElementById("Wins").innerHTML = Wincount;
                document.getElementById("Guess").innerHTML = Guesses;
                document.getElementById("Attempts").innerHTML = Letters;
                document.getElementById("win/lose").innerHTML = ""
                return game();
                }
        
        // if letters that are chosen are already in the guessed Letters array, nothing further will happen.
        else if (Letters.includes(letter)) {
                }
        // if letter is in answer array, nothing further will happen.
        else if (answer.includes(letter)) {
                }
        // this is made for when a letter is in the correct answer. 
        // first checks to see if letter is in the band name that was chosen using the include method.
        else if (band.includes(letter)) {
            // to make choices player made show up on the answer, had to make another loop.
            for (var l = 0; l <choice.length; l++) { // variable "l" will loop through the random word, and create it's own index of 0 - whatever.
                    if (choice[l] === letter) { // we use "l" as an index for the choice array. It's also checking if the letter chosen is in the choice array. 
                    answer[l] = letter; // since "l" is also being used as an index for answer array, the letter the player chose is being placed on the answer array.
                    remaining--; // this is lowering the amount of remaining characters by how many letters were in the choice array.
                    }
                        if(remaining === 0) { // if after the player's choice made remaining variable 0, a message appears to say the player won.
                        document.getElementById("win/lose").innerHTML = "You Win! Press any button to play again!";
                        }
                }
                document.getElementById("displayanswer").innerHTML = answer.join(' ');
                }
    
        else if (Guesses === 1) {
                Guesses--;
                document.getElementById("Guess").innerHTML = Guesses;
                Losecount++;
                document.getElementById("Losses").innerHTML = Losecount;
                document.getElementById("win/lose").innerHTML = "You lose. Press any key to try again.";
                }
                
            else {
                Guesses--;
                document.getElementById("Guess").innerHTML = Guesses;
                Letters.push(letter);
                document.getElementById("Attempts").innerHTML = Letters;
                }
            }
        }
game()