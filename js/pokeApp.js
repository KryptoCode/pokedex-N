angular.module('pokedexN', ['ui.router', 'ngAnimate'])

.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '../views/home/home.html',
			controller: 'homeCtrl'
		}) 

		.state('character', {
			url: '/character/:id/:name',
			templateUrl: '../views/character/character.html',
			controller: 'characterCtrl'
		}) 

		.state('catch', {
			url: '/catch',
			templateUrl: '../views/catch/catch.html',
			controller: 'catchCtrl'
		})


});