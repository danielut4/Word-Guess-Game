window.onload = function() {

    var words = ["Utah", "Arizona", "Arizona St", "Colorado", "Oregon", "Oregon St", "Cal", "USC", "UCLA", "Stanford", "Washington", "Washington St"];
    var guessesRemaining = 7;
    var randomSchool = words[Math.floor((Math.random() * words.length))];
    var underScoreWord = "";
    var letterGuess = [];
    var indexes = [];
    var trueFalse = false;
    
    
    underScores();
    
    document.addEventListener('keypress', function(event) {
    
        letterGuess.push(String.fromCharCode(event.keyCode));
    
        for (var j = 0; j < randomSchool.length; j++) {
            
            if (randomSchool[j] === letterGuess[letterGuess.length-1]) {
                
                trueFalse = true;
                indexes.push(j);
                var splitWord = underScoreWord.split("");
    
                for (k = 0; k < indexes.length; k++) {
                    splitWord[indexes[k]] = letterGuess[letterGuess.length-1];
                    indexes = [];
                    underScoreWord = splitWord.join("");
                }
            } 
        }
    
        if (trueFalse) {
            document.getElementById('randomSchool').innerHTML = underScoreWord;
            letterGuess.pop();
    
    
        } else {
            guessesRemaining--
            document.getElementById('guessed').innerHTML = letterGuess;
            document.getElementById('remainingGuesses').innerHTML = "Guesses Remaining: " + guessesRemaining;
        }
    
        trueFalse = false;
        checkWin();
        images();
        
    });
    
    
    
    function underScores() {
        for (var i = 0; i < randomSchool.length; i++) {
            underScoreWord += "_";
        }
        document.getElementById('randomSchool').innerHTML = underScoreWord;
    }
    
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
   
    }
    
    
    
    
    
    
    
    