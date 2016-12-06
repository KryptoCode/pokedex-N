angular.module('pokedexN')
.directive('createAnimate', function($compile) {
	return {
		restrict: 'AE',
		link: function(scope, element, attrs){

			var html = '<div id="throw-left"><div id="bouncer"><div class="pokeball-sprite"></div></div></div>',
			compileElem = $compile(html)(scope);

			element.on('click', function(event) {
				var spawnElement = angular.element(document.getElementById("spawnPoint"));
				var targetArea = angular.element(document.getElementById("trgArea"));
					
					spawnElement.append(compileElem);
					setTimeout(function() {

						compileElem.remove();
						
					}, 1800);
				
			})
		}
	}
})