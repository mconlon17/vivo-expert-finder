'use strict';

//  Value service provides the current version of the app
//  Factory service provides a query method that will get data for individual
//  concepts, or for all concepts.

angular.module('myApp.services', ['ngResource'])

    .factory('Concept', ['$resource',
        function($resource){
            return $resource('../data/:conceptId.json', {}, {
            query: {method:'GET', params:{conceptId:'concepts'}, isArray:true}
        });}
    ])

    .value('version', '0.1')

;
