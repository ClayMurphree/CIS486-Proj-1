(
  function()
  {
    'use strict';

    angular.module
    (
      'myApp'
    ).config
    (
      Routes
    );

    Routes.$inject = ['$routesProvider'];

    function Routes($routesProvider)
    {
      $routesProvider.when
      (
        '/',
        {
          templateUrl: 'views/test.html',
          controller: 'mainCtrl'
        }
      )
    }
  }
)
(
);