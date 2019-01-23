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
      $scope.stuff = [
      {
        "album": "The White Stripes",
        "year": 1999,
        "US_peak_chart_post": "-"
      },
      {
        "album": "De Stijl",
        "year": 2000,
        "US_peak_chart_post": "-"
      },
      {
        "album": "White Blood Cells",
        "year": 2001,
        "US_peak_chart_post": 61
      },
      {
        "album": "Elephant",
        "year": 2003,
        "US_peak_chart_post": 6
      },
      {
        "album": "Get Behind Me Satan",
        "year": 2005,
        "US_peak_chart_post": 3
      },
      {
        "album": "Icky Thump",
        "year": 2007,
        "US_peak_chart_post": 2
      },
      {
        "album": "Under Great White Northern Lights",
        "year": 2010,
        "US_peak_chart_post": 11
      },
      {
        "album": "Live in Mississippi",
        "year": 2011,
        "US_peak_chart_post": "-"
      },
      {
        "album": "Live at the Gold Dollar",
        "year": 2012,
        "US_peak_chart_post": "-"
      },
      {
        "album": "Nine Miles from the White City",
        "year": 2013,
        "US_peak_chart_post": "-"
      }]
    }
  }
)
();