'use strict';

/* Filters */

angular.module('myApp.filters', [])
  .filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }])

  // Usage:  {{number|unit:phone}} will produce 2 phones or 1 phone
  .filter('unit', function() {
    return function(number, label) {
      if (number == 1) { return(number.toString() + ' ' + label); }
      else {return(number.toString() + ' ' + label + 's'); }
  };})

  ;
