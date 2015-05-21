//2 arguments, name of module and array of dependencies (sub modules: routing, animating: ng-route, ng-animate)
var steakStore = angular.module('steakStore', []);

//can you do this with a normal constructor?

//return array of hardcoded items
steakStore.factory('steakFactory', function(){
	//make an array of objects
	

	return [
		{name:'Filet', size:'1lb', cost: 20},
		{name:'New York', size:'.75lbs', cost: 17},
		{name:'Ribeye', size:'1.5lbs', cost: 30}
	];		

});

// takes in name and function
//need to define controllers in html
steakStore.controller('steakController', function($scope, steakFactory){
	console.log('controller working');
	$scope.name = 'Steak Store';
	$scope.factory = steakFactory;

});