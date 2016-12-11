angular.module('pokedexN').controller('chooseCtrl', function($scope, mainService, $timeout) {
	$scope.hidePokemon = true;
	$scope.hideForm = false;

	$scope.words = {
		greeting: "hello pokemon trainer. Please type your name into the Pokedex.",
		trainer: ""
	};
	
	$scope.voice = function() {
		var speak = mainService.getVoice;

			if($scope.words.trainer === "") {
				speak($scope.words.greeting);
			} 
			else if($scope.words.trainer !== "") {
				speak("Welcome " + $scope.words.trainer + " to the Pokemon chamber. Here you may choose your starter Pokemon");
				$scope.hideForm = true;
			}

		console.log(speak);
		
	}

	$timeout($scope.voice, 1000);

	$scope.update = function(user) {
		$scope.words.trainer = user;
		console.log(user);
		$scope.voice();
	}

	$scope.choice = function() {
		if($scope.words.trainer !== "") {
			var num = Math.floor(Math.random() * 4 + 1);
			$scope.hidePokemon = false;
			$scope.words.madeChoice = "Congradulations Pokemon Trainer " + $scope.words.trainer + "! You have chosen a Pikachu as your starter pokemon.";
			var speak = mainService.getVoice;
			speak($scope.words.madeChoice);
		}
		
	}

	// on enter voice ask the pokemon trainer for his name, please type in input field

	//on enter or button press voice confirms name and asks the trainer to choose a starter pokemon
		//input field disappears

		//pokeballs become active links

	// on click choosen pokemon appears in center of stage

	// voice tells trainer about his starter pokemon
		//floating window containing all the information voice is saying in case no volume

});