'use strict';

//  Directives


angular.module('myApp.directives', [])

.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
}])

.directive('dynCircle', function ($parse) {
	return {
		restrict: 'E',
		scope: {
			val: '=',
		},
		link: function (scope, element, attrs) {

		// set up initial svg object

		var viz = d3.select(element[0])
			.append("svg")
			.attr("width", 300)
			.attr("height",300)
			.append("circle")
				.attr("cx",function(d) {return "150";})
				.attr("cy",function(d) {return "150";})
				.attr("r",function(d) {return "10"})
				.style("fill",function(d) {return "green";});

		scope.$watch('val', function (newVal, oldVal) {

		//   alert("In watch. Will transition circle. val radius is "+newVal[0].r+"viz"+viz);

			viz.transition()
				.duration(750)
				.delay(200)
				.attr("r", function() { return newVal[0].r; })
				.style("fill", function(d) {return newVal[0].color;});
		});
        }
    }
})

;
