angular.module('pokedexN')
.directive('battleDirective', function() {
	return {
		restrict: 'EA',
		scope: {
			health: '=',
			name: '='
		},
		templateUrl: 'directives/templates/battle.html'
	}
})