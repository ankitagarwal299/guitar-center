'use strict';

angular.module('guitarCenterApp')

.directive('slider', function($timeout) {
	return {
		//restrict: 'AE',
		replace: true,
		scope: {
			images: '='
		},
		link: function(scope, elem,attrs) 
		{
			scope.currentIndex = 0; // Initially the index is at the first image

			//next function to select next index
			scope.next = function() {
				scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
			};


			//timer setup
			var timer;
			//var promise ;
			var sliderFunc = function() {
				timer = $timeout(function() {
					scope.next();
					timer = $timeout(sliderFunc, 1000);
				}, 1000);
				
			};


				sliderFunc();

				scope.startAuto	 = function(){
						sliderFunc();					
				};
				
				scope.stopAuto = function() {
				//console.log('tickCtrl.stopAuto() triggered');
				$timeout.cancel(timer);
			};

			scope.$watch('currentIndex', function() {
				scope.images.forEach(function(image) {
  		    image.visible = false; // make every image invisible
  		    });

			  scope.images[scope.currentIndex].visible = true; // make the current image visible
			});

			scope.$on('$destroy', function() {
 			$timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
 		});

		},
		templateUrl: 'scripts/directives/sl.html'
	};
});


