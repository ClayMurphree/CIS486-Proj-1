/***                                          ***\

  Filename: routes.js
  Author: Quint Glover

  Copyright (c) 2019 University of North Alabama
  
\***                                          ***/

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

    Routes.$inject = ['$routeProvider'];

    function Routes($routeProvider)
    {
      $routeProvider.when
      (
        '/classMembers',
        {
          templateUrl: 'views/classMembers.html',
          controller: 'mainCtrl'
        }
      )
      .when
      (
        '/modalConcept',
        {
          templateUrl: 'views/modalConcept.html',
          controller: 'mainCtrl'
        }
      )
	    .when
		(
		'/proffesorsPage',
			{
				templateUrl: 'views/proffesorsPage.html',
				controller: 'proffCtrl'
				}
		)
    }
    
  }
)
(
);
