'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('MyCtrl1', ['$scope', function($scope) {

    // set initial radius, provide initial data

    $scope.radius = "75";

	$scope.getData = function(){
	    $scope.data = [{"cx":150,"cy":150,"r":$scope.radius,"color":"purple"}];
	    alert("In controller radius = "+$scope.data[0].r);
	};

	$scope.getData();


}])

.controller('MyCtrl2', ['$scope', 'Concept',
    function($scope, Concept) {
        $scope.concepts = Concept.query();
        $scope.orderProp = '-count';
        alert($scope.orderProp+" read and ready!");
    }])

;
