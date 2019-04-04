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
        '/',
        {
          templateUrl: 'views/dashboard.html',
          controller: 'mainCtrl'
        }
      )
      .when
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
	  '/champions',
		{
		  templateUrl: 'views/champions.html',
		  controller: 'mainCtrl'
		}
	  )
    .when
    (
      '/trophyRoom',
      {
        templateUrl: 'views/trophyRoom.html',
        controller: 'mainCtrl'
      }
    )
    }

  }
)
(
);
