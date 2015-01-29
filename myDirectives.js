'use strict';
var app = angular.module('myDirectives', []);

app.directive('camelCase', function() {
	
});

app.directive('pending', function($q, $http) {
	return {
		restrict: 'AE',
		scope: {
			request: '&'
		},
		link: function(scope, elmnt, attrs) {
			var loading = 
			elmnt.bind('click', function() {
				if(elmnt.val() === 'submit') {
					elmnt.val('loading');
				} else {
					elmnt.val('submit');
				}
			})
			// scope.request === mainCtrl.getData;
		}
	}
});