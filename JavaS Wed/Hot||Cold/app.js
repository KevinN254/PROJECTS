
$(document).ready(function(){
	$('.new').click(function(){
       $(startNewGame);
    })
})
    var computerChoice= Math.random();

	var COMPUTER_CHOICE = null;
	var NUM_GUESSES = null;
	var GAME_OVER = false;

	
	console.log(computerChoice);

  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*
    ** guess button pressed; get guess from text field
    */
    $("#guessButton").click(function(event){

    	// call preventDefault method so the onload method is not called again
    	event.preventDefault();

    	console.log("guess button down");

    	if (null === COMPUTER_CHOICE)
    	{
    		alert ("Please press new game button to get started"); 
    		return; 
    	}

    	if (GAME_OVER)
    	{
    		startNewGame();
    	}
    	
    	var guess = $('#userGuess').val();
    	
    	// make sure guess is a whole number and within 1-100
    	if (guess != null && ((guess % 1)==0) && (guess > 0 && guess < 101))
    	{
    		NUM_GUESSES++; 
    		
    		$("#count").text(NUM_GUESSES);

    		console.log("num guess is " + NUM_GUESSES);
    		console.log("guess is " + guess);

    		// add guess to guess list
    		$("#guessList").append("<li>" + guess + "</li>");

    		compareGuess (guess);
    	}
    	else
    	{
    		alert("invalid guess. Please enter a whole number betwee 1 and 100"); 
    	}
    	
	});


	

	/*
	** process user's guess
	*/
	function compareGuess(guess)
	{
        if(guess === computerChoice)
        {
            alert ("You are on Point")
        }

        else if(guess && (computerChoice - guess === 5))
        {

        }
        
		/*
		** The computer has already picked a random number between 1 and 100. The player has entered a guess which is passed 
		** into this funciton as a parameter. Compare the computers random number with the players guess. You will then give 
		** feedback back to the user if the guess is close or not. If the guess is right on, you will tell the user so. If 
		** the guess is within 5, tell them they are very hot, within 10 they are hot, within 20 - warm, within 30 cool, 
		** within 40 - cold, more than 40 - ICE cold. Feedback goes into the "feedback" component. Hint: you will need another 
		** function from the Javascript Math ojbect
		*/ 
		
	}


	/*
	** start new game
	*/
	function startNewGame()
	{
		COMPUTER_CHOICE = randomComputerChoice();
		console.log ("starting new game; computer choice is: " + COMPUTER_CHOICE); 

		NUM_GUESSES = 0; 
		GAME_OVER = false;

		$("#count").text(NUM_GUESSES);
		$("#feedback").text("Make your guess!");

		$("#userGuess").val("Enter your guess!");

		// clear previous game guess list if any
		$("ul.guessBox li").remove();

	}

	/*
    ** clear text entry to get reay for new user guess
    */
    $('#userGuess').mouseenter(function() {

    	console.log ("user guess mouse enter");
    	$("#userGuess").val("");
    	
	});


});


