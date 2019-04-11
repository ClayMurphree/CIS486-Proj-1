 (
 function()
  {

    'use strict';

    angular.module('myApp').controller('playlistCtrl', playlistCtrl);


    function playlistCtrl($scope)
    {
		 $scope.video = 
		 [
			{
				"title": "Queen - We Are The Champions (Official Video)",
				"link": "https://youtu.be/04854XqcfCY"
			},
			{
				"title": "Queen - We Are The Champions (Lyrics)",
				"link": "https://youtu.be/Jmd4OLzhQw0"
			},
			{
				"title": "Queen - We Are The Champions (Live)",
				"link": "https://youtu.be/KXw8CRapg7k"
			},
			{
				"title": "GLEE - We Are The Champions (Full Performance) HD)",
				"link": "https://youtu.be/bGMo2SwWK4Q"
			},
			{
				"title": "Jimmy Fallon, The Roots, and Music Superstars Sing 'We Are The Champions' (A Cappella)",
				"link": "https://youtu.be/KHHqPTQDIlo"
			},
			{
				"title": "We are the Champions - Green Day cover",
				"link": "https://www.youtube.com/embed/DYheOpS03bk" 
			}
		]
	}
		 
  }
  )
 ();