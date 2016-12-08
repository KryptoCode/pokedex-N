angular.module('pokedexN').service('mainService', function($http) {



		this.getPokemon = function(nameId) {
			return $http({
				method: 'GET',
				url: 'http://pokeapi.co/api/v2/pokemon/' + nameId + '/',
				cache: true
			}).then(function(response) {
				return response.data;
			})
		}


		this.getYtubeVids = function(srcTerm) {
			var ytKey = 'AIzaSyCPsfxhF0l-T8m47088yGuu-FvtfPfNFrE';
			return $http({
				method: 'GET',
				url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=relevance&q=' + srcTerm + '&safeSearch=strict&type=video&videoCaption=any&key=' + ytKey,
				cache: true
			}).then(function(response) {
	 			this.ytTitle = response.data.items;

	 			return ytTitle;
	 		})
		}

})