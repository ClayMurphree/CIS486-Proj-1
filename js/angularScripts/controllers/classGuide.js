(
  function()
  {
    // The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
    // With strict mode, you can not, for example, use undeclared variables.
    'use strict';

    // Declare that we are using out testApp module, and define out dashboardCtrl to call a function called MainCtrl
    angular.module('myApp').controller('classGuideCtrl', classGuideCtrl);

    // Implement our MainCtrl function
    function classGuideCtrl($scope)
    {
      console.log("class guide working...");

      $scope.classGuides = [
        {
          "courseNumber": "CS 135",
          "coreCourse": true,
          "electiveCourse": false,
          "courseName": "Computer Skills and Problem Solving",
          "usualProfessor": "",
          "needToKnow": "You learn Microsof Office. If you struggle in this class, then this major is not for you."
        },
        {
          "courseNumber": "CIS 225",
          "coreCourse": true,
          "electiveCourse": false,
          "courseName": "Introduction to Object-Oriented Programming",
          "usualProfessor": "",
          "needToKnow": "This is your first introduction to programming. You'll need to understand if statements, loops, and basic functions. Learn how to teach yourself and if you're having trouble with a program, you're probably making it more complicated than it needs to be."
        },
        {
          "courseNumber": "CIS 315",
          "coreCourse": true,
          "electiveCourse": false,
          "courseName": "Advanced Object-Oriented Programming",
          "usualProfessor": "",
          "needToKnow": "Do whatever reading is assigned for the next class. This class is much harder, so don't let yourself fall behind. The professors are here to help so go to them if you need help understanding the material. The material is comprehensive so farther you fall behind, the harder the class becomes."
        },
        {
          "courseNumber": "CIS 330",
          "coreCourse": true,
          "electiveCourse": false,
          "courseName": "Systems Analysis & Design",
          "usualProfessor": "",
          "needToKnow": "This class covers the system development life cycle. Other than that, the class isn't too hard, just make sure to keep up with the large amount of homework. You will have to present in front of the class towards the end of the semester."
        },
        {
          "courseNumber": "CIS 344",
          "coreCourse": true,
          "electiveCourse": false,
          "courseName": "IT Infrastructure",
          "usualProfessor": "",
          "needToKnow": "This is a basic networking class. You'll be doing a lot of work on the command line so make sure that you are comforitable with it. If networking isn't your thing, this class can be challenging."
        },
        {
          "courseNumber": "CIS 366",
          "coreCourse": true,
          "electiveCourse": false,
          "courseName": "Database Development & Management",
          "usualProfessor": "",
          "needToKnow": "First database class. You will learn the basics of interacting with a MySql database. This class is EXTREMELY important for CIS majors. Joins are the hardest thing that you will do in regards to queries. If you can understand joins, you'll pass the class."
        },
        {
          "courseNumber": "CIS 376",
          "coreCourse": true,
          "electiveCourse": false,
          "courseName": "Web Development",
          "usualProfessor": "",
          "needToKnow": "If you have never made a web page, this will be your first interaction with them. It may be extremely tempting to us website builders such as Wix. DO NOT USE THEM. Not only does it hurt you in the long run, but you won't have that crutch on the exams. You will also use some basic JavaScript. At this point in your college career, if you understand basic syntax structure, you'll be fine. The learning curve comes from learning how the scripts interact with the html. Make sure that you understand this."
        },
        {
          "courseNumber": "CIS 476",
          "coreCourse": true,
          "electiveCourse": false,
          "courseName": "Enterprise Architecture",
          "usualProfessor": "",
          "needToKnow": "This class will cover a variety of topics but most of the homework will involve basic html, PHP, and MySql databases. Learning server-side databases is a new concept for most students and it expected that you will teach yourself outside of class. DO NOT slack on this! Outside of college, new languages will not be taught to you by a professor and that is how this class is set up. You have to have the drive to teach yourself new concepts in order to succeed. Additionally, there is assigned reading for every class. Make sure you do the reading."
        },
        {
          "courseNumber": "CIS 486",
          "coreCourse": true,
          "electiveCourse": false,
          "courseName": "Projects in Information Systems",
          "usualProfessor": "",
          "needToKnow": "This class is the culmination of all of your previous classes. You will be put in the best approximation of a real world scenario in which you will meet with a client, get the outline of the project, and develop the project to the clients' specifications. In order to succed in this class, you have to have the initative to do these things yourself. No one is going to do it for you."
        },
        {
          "courseNumber": "CIS 249",
          "coreCourse": false,
          "electiveCourse": true,
          "courseName": "Information Security",
          "usualProfessor": "",
          "needToKnow": "TBD"
        },
        {
          "courseNumber": "CIS 289",
          "coreCourse": false,
          "electiveCourse": true,
          "courseName": "HCI / UX",
          "usualProfessor": "",
          "needToKnow": "TBD"
        },
        {
          "courseNumber": "CIS 444",
          "coreCourse": false,
          "electiveCourse": true,
          "courseName": "Advanced IT Infrastructure",
          "usualProfessor": "",
          "needToKnow": "TBD"
        },
        {
          "courseNumber": "CIS 445",
          "coreCourse": false,
          "electiveCourse": true,
          "courseName": "Advanced Database Management Systems",
          "usualProfessor": "",
          "needToKnow": "TAKE THIS CLASS. This course covers advanced MySql commands and introduces students to MongoDB which is a very in-demand skill. Learning Mongo is completely different from MySql and the projects are challenging, but if you pass the class, your resume will thank you."
        },
        {
          "courseNumber": "CIS 446",
          "coreCourse": false,
          "electiveCourse": true,
          "courseName": "Decision Support Using Spreadsheets",
          "usualProfessor": "",
          "needToKnow": "TBD"
        },
        {
          "courseNumber": "CIS 480",
          "coreCourse": false,
          "electiveCourse": true,
          "courseName": "CIS Internship",
          "usualProfessor": "",
          "needToKnow": "TBD"
        },
        {
          "courseNumber": "CIS 489",
          "coreCourse": false,
          "electiveCourse": true,
          "courseName": "Capstone HCI / UX Project",
          "usualProfessor": "",
          "needToKnow": "TBD"
        }
      ]
    }
  }
)
();
