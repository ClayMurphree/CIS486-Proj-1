(
  // Define a basic function
  function()
  {

    // The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
    // With strict mode, you can not, for example, use undeclared variables.
    'use strict';

    // Declare our Angular module (ng-app) and name it testApp.
    // ngRoute is a module that allows for dynamic view that can be added at a later date if we want
    // to go in that direction
    angular.module
    (
      'testApp', 
      [
        'ngRoute'
      ]
    );
  }
)
// Make this function call itself
();