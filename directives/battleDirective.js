angular.module('pokedexN')
.directive('battleDirective', function() {
	return {
		restrict: 'EA',
		scope: {
			health: '=',
		},
		templateUrl: '/directives/templates/battle.html'
	}
})