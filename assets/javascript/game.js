window.onload = function() {

    var words = ["Utah", "Arizona", "Arizona St", "Colorado", "Oregon", "Oregon St", "Cal", "USC", "UCLA", "Stanford", "Washington", "Washington St"];
    var guessesRemaining = 7;
    //generates random #, and assigns it to an item in the array, storing it in randomWord
    var randomSchool = words[Math.floor((Math.random() * words.length))];
    var underScoreWord = "";
    var letterGuess = [];
    var indexes = [];
    var trueFalse = false;
    
    
    //call underscore function to display randomWord underscores
    underScores();
    
    //listen for keypress, and run function
    document.addEventListener('keypress', function(event) {
    
        //pushes key pressed into array of guessed letters
        letterGuess.push(String.fromCharCode(event.keyCode));
    
        //loop through random word's letters, checking against keypress
        for (var j = 0; j < randomSchool.length; j++) {
            
            //if any letter of randomWord is equal to the last letter pressed
            if (randomSchool[j] === letterGuess[letterGuess.length-1]) {
                
                //tell me keypress matches character in randomWord (used for if/else later)
                trueFalse = true;
                //tell me at what index the matching characters are at
                indexes.push(j);
                //change underScoreWord from string to array for looping
                var splitWord = underScoreWord.split("");
    
                //loop through splitWord array, and set matching indices to corresponding keypress
                for (k = 0; k < indexes.length; k++) {
                    splitWord[indexes[k]] = letterGuess[letterGuess.length-1];
                    //reset indexes array to nothing, so we can loop through again later
                    indexes = [];
                    //rejoin underScoreWord as string for display
                    underScoreWord = splitWord.join("");
                }
            } 
        }
    
        //if/else statement checking success or failure of matching characters
        if (trueFalse) {
            document.getElementById('randomSchool').innerHTML = underScoreWord;
            // If characters match, remove last entered character from letterGuess array
            // I only want incorrect letters in the letterGuess array
            letterGuess.pop();
    
    
        } else {
            // If keypress has no matches, lower guesses by 1
            guessesRemaining--
            //display letters guessed
            document.getElementById('guessed').innerHTML = letterGuess;
            //display remaining chances
            document.getElementById('remainingGuesses').innerHTML = "Guesses Remaining: " + guessesRemaining;
        }
    
        //reset trueFals to false, to restart entire process
        trueFalse = false;
        //call function to determine win/lose (see below)
        checkWin();
        //call function for appropriate image, depending on state of missed guesses
        images();
        
    });
    
    
    
    //converts randomWord into string of underscores of matching length
    function underScores() {
        for (var i = 0; i < randomSchool.length; i++) {
            underScoreWord += "_";
        }
        document.getElementById('randomSchool').innerHTML = underScoreWord;
    }
    
    //checks to see if player wins or loses, and alerts the answer
    function checkWin() {
        if (underScoreWord === randomSchool) {
                alert("You Win! Refresh the page for new word.");
                    
                function beep() {
                    var snd = new Audio("assets/sounds/ding-sound-effect_2.mp3");
                    snd.play();
                }
                beep();

                
            } else if (guessesRemaining === 0) {
                alert("You Lose! Refresh the page for new word.");
                document.getElementById('randomSchool').innerHTML = randomSchool;
            }
    }   
    
    //calls specific image related to # of guess remaining
    function images(){
        if (guessesRemaining === 6) {
            document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-6.png height='400'/>";
    
        } else if (guessesRemaining === 5) {
            document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-5.png height='400'/>";
    
        } else if (guessesRemaining === 4) {
            document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-4.png height='400'/>";
    
        } else if (guessesRemaining === 3) {
            document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-3.png height='400'/>";
            
        } else if (guessesRemaining === 2) {
            document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-2.png height='400'/>";
            
        } else if (guessesRemaining === 1) {
            document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-1.png height='400'/>";
    
        } else if (guessesRemaining === 0) {
            document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-0.png height='400'/>";   
        }
    }
    
    
    }
    
    
    
    
    
    
    
    