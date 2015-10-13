'use strict';

/**
 * @ngdoc filter
 * @name guitarCenterApp.filter:shipppingFilter
 * @function
 * @description
 * # shipppingFilter
 * Filter in the guitarCenterApp.
 */
angular.module('guitarCenterApp')
  .filter('shipppingFilter', function () {
    return function (input,field,shipppingFilter) {

/*console.log("input"+ input + "\n");
console.log("shipppingFilter"+ shipppingFilter + "\n");
console.log("field"+ field + "\n");

    	var patt = new RegExp(shipppingFilter);      
    	console.log("pattern"+ patt + "\n");
      var out = [];
      for (var i = 0; i < input.length; i++){
      	
      	//console.log(input.length);
      	console.log(input[i][field]);
          
          if(patt.test(input[i][field])){
          	console.log("HIIII"+input[i][field]);
              out.push(input[i]);
             
			}else{

			}

       
		
      return out;
    };

*/
var a = "charges for shipping $25"; 
return a.split(' ')[3];
console.log(a.split(' ')[3]);
}

});
