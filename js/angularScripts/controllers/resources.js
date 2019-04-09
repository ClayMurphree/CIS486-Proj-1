(
  function()
  {
    // The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
    // With strict mode, you can not, for example, use undeclared variables.
    'use strict';

    // Declare that we are using out testApp module, and define out dashboardCtrl to call a function called MainCtrl
    angular.module('myApp').controller('resourceCtrl', resourceCtrl);

    // Implement our MainCtrl function
    function resourceCtrl($scope)
    {
      console.log("resource controller working...");

      $scope.resources = 
      [
        {
          "name": "Code Pen",
          "link": "codepen.io",
          "description": "Web Based Development Environment"
        },
        {
          "name": "Packt Pub",
          "link": "https://www.packtpub.com/packt/offers/free-learning",
          "description": "Free Learning Resource"
        },
        {
          "name": "MIT Open Courseware",
          "link": "https://ocw.mit.edu/courses/#electrical-engineering-and-computer-science",
          "description": "Online teaching materials"
        },
        {
          "name": "Codecademy",
          "link": "https://www.codecademy.com/catalog/subject/all",
          "description": "Online coding lessons"
        },
        {
          "name": "Interview Cake",
          "link": "https://www.interviewcake.com/?utm_source=ltcwm",
          "description": "Learn how to succeed at programming interviews"
        },
        {
          "name": "Command Line Crash Course",
          "link": "https://www.computervillage.org/articles/CommandLine.pdf",
          "description": "Learn how to use the command line"
        },
        {
          "name": "Asana",
          "link": "https://asana.com/",
          "description": "Project management tool"
        },
        {
          "name": "MySQL Tutorial",
          "link": "http://www.mysqltutorial.org/",
          "description": "Online MySQL Tutorial"
        },
        {
          "name": "MongoDB University",
          "link": "https://university.mongodb.com/courses/catalog",
          "description": "Online MongoDB Courses"
        }
      ]
    }
  }
)
();
