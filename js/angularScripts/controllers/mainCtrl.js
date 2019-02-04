(
  function()
  {
    // The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
    // With strict mode, you can not, for example, use undeclared variables.
    'use strict';

    // Declare that we are using out testApp module, and define out dashboardCtrl to call a function called MainCtrl
    angular.module('myApp').controller('mainCtrl', MainCtrl);

    // Implement our MainCtrl function
    function MainCtrl($scope)
    {
      console.log("Hello world! Angular is working!");

      //We define another variable called stuff
      //This variable is assigned to some json code. Basically we are creating an array of objects
      $scope.people = [
      {
        "timestamp": "1/17/2019 17:59:54",
        "firstName": "Franklin",
        "lastName": "Glover",
        "profilePic": "img/qGlover.jpg",
        "major": "Computer Information Systems",
        "location": "Florence, AL",
        "email": "quintglover91@gmail.com",
        "ennagram": "Type 5 - The Investigator",
        "github": "https://github.com/quintg1991",
        "linkedIn": "https://www.linkedIn.com/in/franklinglover/",
        "facebook": "",
        "twitter": "",
        "instagram": "",
        "link1": "http://quintswebdesign.com/",
        "link2": "",
        "link3": "",
        "resume": "https://drive.google.com/open?id=14VE6P0rkbwI6PGxgzQ57bc8WkPmKoLGH"
      },
      {
        "timestamp": "1/18/2019 18:26:48",
        "firstName": "Kevin",
        "lastName": "Paskevicius",
        "profilePic": "img/kPaskivicious.png",
        "major": "Computer Information Systems",
        "location": "Spotsylvania, VA",
        "email": "kpaskevicius@una.edu",
        "ennagram": "Type 9 - Peacemaker",
        "github": "https://github.com/kpaskevicius",
        "linkedIn": "",
        "facebook": "",
        "twitter": "",
        "instagram": "",
        "link1": "",
        "link2": "",
        "link3": "",
        "resume": ""
      },
      {
        "timestamp": "1/21/2019 9:53:35",
        "firstName": "Garrett",
        "lastName": "Harmon",
        "profilePic": "img/gHarmon.png",
        "major": "Computer Information Systems",
        "location": "Lanett, AL",
        "email": "qharmon@una.edu",
        "ennagram": "Type 2 - Helper",
        "github": "https://github.com/OG-Garrett-Harmon/376Portfolio",
        "linkedIn": "https://www.linkedIn.com/in/garrett-harmon-363858149/",
        "facebook": "https://www.facebook.com/qgharmon?ref=bookmarks",
        "twitter": "N/A",
        "instagram": "https://www.instagram.com/og_garrettharmon/",
        "link1": "https://og-garrett-harmon.github.io/376Portfolio/projects/UX/index.html",
        "link2": "https://og-garrett-harmon.github.io/376Portfolio/projects/modalwindow/",
        "link3": "https://og-garrett-harmon.github.io/376Portfolio/projects/developmentportfolio/",
        "resume": "https://drive.google.com/open?id=1TYSaNc_P0YZHdDYwHaKT0NV93TOw4rIv"
      },
      {
        "timestamp": "1/22/2019 15:46:37",
        "firstName": "Ben",
        "lastName": "Abroms",
        "profilePic": "img/bAbroms.jpg",
        "major": "Information Technology",
        "location": "Florence, AL",
        "email": "benjamin.abroms@gmail.com",
        "ennagram": "Type 9 - Peacemaker",
        "github": "https://github.com/BenAbr",
        "linkedIn": "",
        "facebook": "",
        "twitter": "",
        "instagram": "",
        "link1": "https://www.themuscleshoals.com/",
        "link2": "https://benabr.github.io/CIS376SliderTutorial/",
        "link3": "",
        "resume": ""
      },
      {
        "timestamp": "1/22/2019 15:49:55",
        "firstName": "Alex",
        "lastName": "Franks",
        "profilePic": "",
        "major": "Computer Information Systems",
        "location": "Florence, AL",
        "email": "afranks5@una.edu",
        "ennagram": "Type 1 - The Reformer",
        "github": "https://github.com/afranks5/",
        "linkedIn": "https://www.linkedIn.com/in/alex-franks-2b3618174/",
        "facebook": "",
        "twitter": "",
        "instagram": "",
        "link1": "",
        "link2": "",
        "link3": "",
        "resume": ""
      },
      {
        "timestamp": "1/22/2019 15:55:23",
        "firstName": "Marlon",
        "lastName": "Pitt",
        "profilePic": "img/mPitt.jpg",
        "major": "Computer Information Systems",
        "location": "Moulton, AL",
        "email": "pitt.marlon19@gmail.com",
        "ennagram": "Type 5 - The Investigator",
        "github": "https://github.com/marlonPitt",
        "linkedIn": "https://www.linkedIn.com/in/marlon-pitt-979177120/",
        "facebook": "https://www.facebook.com/pitt.marlon",
        "twitter": "",
        "instagram": "",
        "link1": "http://sagewerkfarms.com/",
        "link2": "http://www.vbsolutions.net/",
        "link3": "",
        "resume": "https://drive.google.com/open?id=1fbVvIxXyK_P7AyBlgHC0emyHUUnm4bWS"
      },
      {
        "timestamp": "1/22/2019 16:25:24",
        "firstName": "Breanna",
        "lastName": "Smith",
        "profilePic": "img/bSmith.png",
        "major": "Computer Information Systems",
        "location": "Gadsden, Al",
        "email": "bsmith14@una.edu",
        "ennagram": "Type 3 - Achiever",
        "github": "https://github.com/blsmith14",
        "linkedIn": "",
        "facebook": "",
        "twitter": "",
        "instagram": "",
        "link1": "",
        "link2": "",
        "link3": "",
        "resume": "https://drive.google.com/open?id=1as4epeW0YA-xxiNYQzjOQtA2KtPivI4V"
      },
      {
        "timestamp": "1/22/2019 16:31:28",
        "firstName": "Nasstajjah",
        "lastName": "Simmons",
        "profilePic": "img/nSimmons.jpg",
        "major": "Computer Information System",
        "location": "Florence, AL",
        "email": "nsimmons@una.edu",
        "ennagram": "Type 3 - The Achiever",
        "github": "https://github.com/Stajjah28",
        "linkedIn": "www.linkedIn.com/in/nasstajjah-simmons",
        "facebook": "",
        "twitter": "",
        "instagram": "",
        "link1": "",
        "link2": "",
        "link3": "",
        "resume": "https://drive.google.com/open?id=1LqunvNvHCd6dFbS_pLcLYwUwOn8vPFTS"
      },
      {
        "timestamp": "1/24/2019 15:37:00",
        "firstName": "Thomas",
        "lastName": "Kenney",
        "profilePic": "",
        "major": "Computer Information Systems",
        "location": "Albertville, AL",
        "email": "tkenney@una.edu",
        "ennagram": "Type 7 - Enthusiast",
        "github": "Tkenney15",
        "linkedIn": "N/A",
        "facebook": "N/A",
        "twitter": "@kylekenney__",
        "instagram": "kylefromtwitter",
        "link1": "",
        "link2": "",
        "link3": "",
        "resume": ""
      },
      {
        "timestamp": "1/24/2019 15:40:13",
        "firstName": "Clay",
        "lastName": "Murphree",
        "profilePic": "",
        "major": "Computer Information Systems",
        "location": "Huntsville, AL",
        "email": "",
        "ennagram": "Type 4 - The Individualist",
        "github": "https://github.com/ClayMurphree",
        "linkedIn": "",
        "facebook": "",
        "twitter": "",
        "instagram": "",
        "link1": "",
        "link2": "",
        "link3": "",
        "resume": ""
      }]
    }
  }
)
();