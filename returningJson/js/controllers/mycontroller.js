(
  function()
  {
    // The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
    // With strict mode, you can not, for example, use undeclared variables.
    'use strict';

    // Declare that we are using out testApp module, and define out dashboardCtrl to call a function called Dashboard
    angular.module('testApp').controller('dashboardCtrl', Dashboard);

    // Implement our Dashboard function
    function Dashboard($scope)
    {
      //Define a simple variable that we can use in the index.html page
      $scope.testVariable = "Hello world";

      // Testing logging something to the console
      console.log("hello world");

      //We define another variable called stuff
      //This variable is assigned to some json code. Basically we are creating an array of objects
      $scope.people = [
  {
    "Timestamp": "1/17/2019 17:59:54",
    "firstName": "Franklin",
    "lastName": "Glover",
    "profilePic": "https://drive.google.com/open?id=1mu_fbyegIq0sccRsCoKxSHAlKXbkwESE",
    "Major": "Computer Information Systems",
    "Where are you from?": "Florence, AL",
    "Email": "quintglover91@gmail.com",
    "Ennagram Results": "Type 5 - The Investigator",
    "Github": "https://github.com/quintg1991",
    "LinkedIn": "https://www.linkedin.com/in/franklinglover/",
    "Facebook": "",
    "Twitter": "",
    "Instagram": "",
    "link1": "http://quintswebdesign.com/",
    "Project Link 2": "",
    "Project Link 3": "",
    "Resume (Must upload from Google Drive)": "https://drive.google.com/open?id=14VE6P0rkbwI6PGxgzQ57bc8WkPmKoLGH"
  },
  {
    "Timestamp": "1/18/2019 18:26:48",
    "firstName": "Kevin",
    "lastName": "Paskevicius",
    "profilePic": "https://drive.google.com/open?id=1PS-bFo2-D51DFnT2wEavCFUvuRme5Snd",
    "Major": "Computer Information Systems",
    "Where are you from?": "Spotsylvania, VA",
    "Email": "kpaskevicius@una.edu",
    "Ennagram Results": "Type 9 - Peacemaker",
    "Github": "https://github.com/kpaskevicius",
    "LinkedIn": "",
    "Facebook": "",
    "Twitter": "",
    "Instagram": "",
    "link1": "",
    "Project Link 2": "",
    "Project Link 3": "",
    "Resume (Must upload from Google Drive)": ""
  },
  {
    "Timestamp": "1/21/2019 9:53:35",
    "firstName": "Garrett",
    "lastName": "Harmon",
    "profilePic": "https://drive.google.com/open?id=1vtxdcyNvl_0_vz7GI4w_gcNuYZiFU5dK",
    "Major": "Computer Information Systems",
    "Where are you from?": "Lanett, AL",
    "Email": "qharmon@una.edu",
    "Ennagram Results": "Type 2 - Helper",
    "Github": "https://github.com/OG-Garrett-Harmon/376Portfolio",
    "LinkedIn": "https://www.linkedin.com/in/garrett-harmon-363858149/",
    "Facebook": "https://www.facebook.com/qgharmon?ref=bookmarks",
    "Twitter": "N/A",
    "Instagram": "https://www.instagram.com/og_garrettharmon/",
    "link1": "https://og-garrett-harmon.github.io/376Portfolio/projects/UX/index.html",
    "Project Link 2": "https://og-garrett-harmon.github.io/376Portfolio/projects/modalwindow/",
    "Project Link 3": "https://og-garrett-harmon.github.io/376Portfolio/projects/developmentportfolio/",
    "Resume (Must upload from Google Drive)": "https://drive.google.com/open?id=1TYSaNc_P0YZHdDYwHaKT0NV93TOw4rIv"
  },
  {
    "Timestamp": "1/22/2019 15:46:37",
    "firstName": "Ben",
    "lastName": "Abroms",
    "profilePic": "https://bit.ly/2ATDPoj",
    "Major": "Information Technology",
    "Where are you from?": "Florence, AL",
    "Email": "benjamin.abroms@gmail.com",
    "Ennagram Results": "Type 9 - Peacemaker",
    "Github": "https://github.com/BenAbr",
    "LinkedIn": "",
    "Facebook": "",
    "Twitter": "",
    "Instagram": "",
    "link1": "https://www.themuscleshoals.com/",
    "Project Link 2": "https://benabr.github.io/CIS376SliderTutorial/",
    "Project Link 3": "",
    "Resume (Must upload from Google Drive)": ""
  },
  {
    "Timestamp": "1/22/2019 15:49:55",
    "firstName": "Alex",
    "lastName": "Franks",
    "profilePic": "",
    "Major": "Computer Information Systems",
    "Where are you from?": "Florence, AL",
    "Email": "afranks5@una.edu",
    "Ennagram Results": "Type 1 - The Reformer",
    "Github": "https://github.com/afranks5/",
    "LinkedIn": "https://www.linkedin.com/in/alex-franks-2b3618174/",
    "Facebook": "",
    "Twitter": "",
    "Instagram": "",
    "link1": "",
    "Project Link 2": "",
    "Project Link 3": "",
    "Resume (Must upload from Google Drive)": ""
  },
  {
    "Timestamp": "1/22/2019 15:55:23",
    "firstName": "Marlon",
    "lastName": "Pitt",
    "profilePic": "https://drive.google.com/open?id=14V1EA0P-sZnIRPugD2jZjfUSV5W8kutD",
    "Major": "Computer Information Systems",
    "Where are you from?": "Moulton, AL",
    "Email": "pitt.marlon19@gmail.com",
    "Ennagram Results": "Type 5 - The Investigator",
    "Github": "https://github.com/marlonPitt",
    "LinkedIn": "https://www.linkedin.com/in/marlon-pitt-979177120/",
    "Facebook": "https://www.facebook.com/pitt.marlon",
    "Twitter": "",
    "Instagram": "",
    "link1": "http://sagewerkfarms.com/",
    "Project Link 2": "http://www.vbsolutions.net/",
    "Project Link 3": "",
    "Resume (Must upload from Google Drive)": "https://drive.google.com/open?id=1fbVvIxXyK_P7AyBlgHC0emyHUUnm4bWS"
  },
  {
    "Timestamp": "1/22/2019 16:25:24",
    "firstName": "Breanna",
    "lastName": "Smith",
    "profilePic": "https://drive.google.com/open?id=12lt6b3e0Sbn5NLXyjKWztj4y1ZIZwPGm",
    "Major": "Computer Information Systems",
    "Where are you from?": "Gadsden, Al",
    "Email": "bsmith14@una.edu",
    "Ennagram Results": "Type 3 - Achiever",
    "Github": "https://github.com/blsmith14",
    "LinkedIn": "",
    "Facebook": "",
    "Twitter": "",
    "Instagram": "",
    "link1": "",
    "Project Link 2": "",
    "Project Link 3": "",
    "Resume (Must upload from Google Drive)": "https://drive.google.com/open?id=1as4epeW0YA-xxiNYQzjOQtA2KtPivI4V"
  },
  {
    "Timestamp": "1/22/2019 16:31:28",
    "firstName": "Nasstajjah",
    "lastName": "Simmons",
    "profilePic": "https://drive.google.com/open?id=1MND0gXAe8gidChDpHkVQk2ckGJ1D4O3W",
    "Major": "Computer Information System",
    "Where are you from?": "Florence, AL",
    "Email": "nsimmons@una.edu",
    "Ennagram Results": "Type 3 - The Achiever",
    "Github": "https://github.com/Stajjah28",
    "LinkedIn": "www.linkedin.com/in/nasstajjah-simmons",
    "Facebook": "",
    "Twitter": "",
    "Instagram": "",
    "link1": "",
    "Project Link 2": "",
    "Project Link 3": "",
    "Resume (Must upload from Google Drive)": "https://drive.google.com/open?id=1LqunvNvHCd6dFbS_pLcLYwUwOn8vPFTS"
  },
  {
    "Timestamp": "1/24/2019 15:37:00",
    "firstName": "Thomas",
    "lastName": "Kenney",
    "profilePic": "",
    "Major": "Computer Information Systems",
    "Where are you from?": "Albertville, AL",
    "Email": "tkenney@una.edu",
    "Ennagram Results": "Type 7 - Enthusiast",
    "Github": "Tkenney15",
    "LinkedIn": "N/A",
    "Facebook": "N/A",
    "Twitter": "@kylekenney__",
    "Instagram": "kylefromtwitter",
    "link1": "",
    "Project Link 2": "",
    "Project Link 3": "",
    "Resume (Must upload from Google Drive)": ""
  },
  {
    "Timestamp": "1/24/2019 15:40:13",
    "firstName": "Clay",
    "lastName": "Murphree",
    "profilePic": "",
    "Major": "Computer Information Systems",
    "Where are you from?": "Huntsville, AL",
    "Email": "",
    "Ennagram Results": "Type 4 - The Individualist",
    "Github": "https://github.com/ClayMurphree",
    "LinkedIn": "",
    "Facebook": "",
    "Twitter": "",
    "Instagram": "",
    "link1": "",
    "Project Link 2": "",
    "Project Link 3": "",
    "Resume (Must upload from Google Drive)": ""
  }
]
    }
  }
)
();