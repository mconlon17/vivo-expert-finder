'use strict';

//  Declare app level module which depends on ngRoute, filters, services,
//  directives and controllers

angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html',
        controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html',
        controller: 'MyCtrl2'});
    $routeProvider.when('/help', {templateUrl: 'partials/help.html',
        controller: 'MyCtrl3'});
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
