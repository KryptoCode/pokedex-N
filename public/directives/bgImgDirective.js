angular.module('pokedexN')
.directive('bgImgDirective', function() {
	return function(scope, element, attrs) {
		var url = attrs.bgImgDirective;
		element.css({
			'background-image': 'url(' + url + ')',
			'background-size': 'cover',
			'background-repeat': 'no-repeat',
			'background-position': 'center'
		});
	};
});