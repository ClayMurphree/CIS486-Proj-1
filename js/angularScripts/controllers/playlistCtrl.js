 (
 function()
  {

    'use strict';

    angular.module('myApp').controller('playlistCtrl', playlistCtrl);

	console.log("Hello Clay");
    function playlistCtrl($scope)
    {
		 $scope.video = 
		 [
			{
				"title": "Queen - We Are The Champions (Official Video)",
				"link": "https://www.youtube.com/embed/04854XqcfCY"
			},
			{
				"title": "Queen - We Are The Champions (Lyrics)",
				"link": "https://www.youtube.com/embed/Jmd4OLzhQw0"
			},
			{
				"title": "Queen - We Are The Champions (Live)",
				"link": "https://www.youtube.com/embed/KXw8CRapg7k"
			},
			{
				"title": "GLEE - We Are The Champions (Full Performance) HD)",
				"link": "https://www.youtube.com/embed/bGMo2SwWK4Q"
			},
			{
				"title": "Jimmy Fallon, The Roots, and Music Superstars Sing 'We Are The Champions' (A Cappella)",
				"link": "https://www.youtube.com/embed/KHHqPTQDIlo"
			},
			{
				"title": "We are the Champions - Green Day cover",
				"link": "https://www.youtube.com/embed/DYheOpS03bk" 
			}
		]
		console.log("We still working down here?");
		var min = 0;
		var max = $scope.video.length - 1;
		var num = Math.floor(Math.random() * (max - min + 1)) + min;
		var randLink = $scope.video[num].link;
		var autoPlay = "&autoplay=1";
		//doesnt work, probably because randLinks not a string
		//randLink.append(autoPlay);
	
		console.log(randLink);
		/*
		bring up the sce in class seems important 
		$scope.setVideo = function (x) {
			$scope.currentVideo = $scope.video[num];
			this trustResourceUrl seems important as well
			x = $sce.trustAsResourceUrl($scope.currentProject.url);	
			console.log(x);
		}
		console.log(x);
		*/
	}
  }
  )
 ();