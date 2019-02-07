(
  function()
  {
    // The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
    // With strict mode, you can not, for example, use undeclared variables.
    'use strict';

    // Declare that we are using out testApp module, and define out dashboardCtrl to call a function called MainCtrl
    angular.module('myApp').controller('proffCtrl', ProffCtrl);

    // Implement our MainCtrl function
    function ProffCtrl($scope)
    {
		console.log("HELLO WORLD");
	
$scope.proffesors = [
  {
    "name": "Dr. M. Shane Banks",
    "Email": "mbanks@una.edu",
    "Image": "",
    "Classification": "Computer Science and Information Systems",
    "Contact Info": "256-765-4301"
  },
  {
    "name": "Mr. Matt Colburn",
    "Email": "jmcolburn@una.edu",
    "Image": "",
    "Classification": "Computer Information Systems",
    "Contact Info": "256-765-4955"
  },
  {
    "name": "Dr. John Crabtree",
    "Email": "jcrabtree@una.edu",
    "Image": "",
    "Classification": "Computer Information Systems",
    "Contact Info": "256-765-4464"
  },
  {
    "name": "Dr. Barry Cumbie",
    "Email": "bcumbie@una.edu",
    "Image": "",
    "Classification": "Computer Information Systems",
    "Contact Info": "256-765-4873"
  },
  {
    "name": "Mr. Ron Davis",
    "Email": "rddavis@una.edu",
    "Image": "",
    "Classification": "Computer Information Systems",
    "Contact Info": "256-765-4819"
  },
  {
    "name": "Ms. Carol Gossett",
    "Email": "chgossett@una.edu",
    "Image": "",
    "Classification": "Computer Information Systems",
    "Contact Info": "256-765-4410"
  },
  {
    "name": "Dr. Janet Jenkins",
    "Email": "jltruitt@una.edu",
    "Image": "",
    "Classification": "Computer Science",
    "Contact Info": "256-765-4601"
  },
  {
    "name": "Dr. James Jerkins",
    "Email": "jajerkins@una.edu",
    "Image": "",
    "Classification": "Computer Science",
    "Contact Info": "256-765-5036"
  },
  {
    "name": "Dr. Andrew Potter",
    "Email": "apotter1@una.edu",
    "Image": "",
    "Classification": "Computer Information Systems",
    "Contact Info": "256-765-4665"
  },
  {
    "name": "Dr. Patricia Roden",
    "Email": "plrodem@una.edu",
    "Image": "",
    "Classification": "Mathematics/Computer Science",
    "Contact Info": "256-765-4478"
  },
  {
    "name": "Dr. Mark Terwilliger",
    "Email": "mterwilliger@una.edu",
    "Image": "",
    "Classification": "Computer Science",
    "Contact Info": "256-765-4828"
  },
  {
    "name": "Dr. Jason Watson",
    "Email": "jwatson5@una.edu",
    "Image": "",
    "Classification": "Computer Information Systems",
    "Contact Info": "256-765-4689"
  },
  {
    "name": "Dr. Xihui\"Paul\" Zhang",
    "Email": "xzhang6@una.edu",
    "Image": "",
    "Classification": "Computer Information Systems",
    "Contact Info": "256-765-4419"
  }
]
	}
  }
 )
 ();