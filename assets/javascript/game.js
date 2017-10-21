

var wins = 0;
var losses = 0;
var remainingGueses = 10;

var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
'n','o','p','q','r','s','t','u','v','w','x','y','z'];

		//computer randomizer (note to self: when inside the keypress function, it picks a new answer at every keypress
		// making game nearly unwinable).
		// maybe add if statement to prevent it from changing every keypress? No, if statement causes answer to only exist when 
		// conditions are met. Makes game nearly unwinable 
		var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
		//cheat to see what it's picked
		console.log(computerGuess);

document.onkeyup = function beginGame (event) {

		//determines which key was pressed
		var userGuess = event.key;

		//saves user key in guesses section
		var used = document.createElement ("li");
		used.innerHTML = userGuess;
		usedLetters.appendChild(used);


		//general game rules
		if (userGuess === computerGuess) {
			++wins;
			alert("A psychic is you! What other wonders might you foresee some day?");
			remainingGueses = 10;
			//currently stuck on being able to restart game and clear existing data
			var list = document.getElementById("usedLetters");
			list.removeChild(list.childNodes[0]);
		}

		else {
			-- remainingGueses;
		}

		if (remainingGueses === 0) {
			alert("This match has been lost, but one may always try again!");
			remainingGueses = 10;
			// generate new computer guess?
			// having a second generator negates the first outside of the function
			// var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
			//cheat to see what it's picked
			console.log(computerGuess);

		}

		// information to display
		document.getElementById("Winning").innerHTML = wins;
		document.getElementById("losing").innerHTML = losses;
		document.getElementById("remainder").innerHTML = remainingGueses;

	}