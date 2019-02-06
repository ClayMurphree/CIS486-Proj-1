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
    "Name": "Dr. M. Shane Banks",
    "Email": "mbanks@una.edu",
    "Image": "",
    "Classification": "Computer Science and Information Systems",
    "Contact Info": "256-765-4301"
  },
  {
    "Name": "Mr. Matt Colburn",
    "Email": "jmcolburn@una.edu",
    "Image": "",
    "Classification": "Computer Information Systems",
    "Contact Info": "256-765-4955"
  },
  {
    "Name": "Dr. John Crabtree",
    "Email": "jcrabtree@una.edu",
    "Image": "",
    "Classification": "Computer Information Systems",
    "Contact Info": "256-765-4464"
  },
  {
    "Name": "Dr. Barry Cumbie",
    "Email": "bcumbie@una.edu",
    "Image": "",
    "Classification": "Computer Information Systems",
    "Contact Info": "256-765-4873"
  },
  {
    "Name": "Mr. Ron Davis",
    "Email": "rddavis@una.edu",
    "Image": "",
    "Classification": "Computer Information Systems",
    "Contact Info": "256-765-4819"
  },
  {
    "Name": "Ms. Carol Gossett",
    "Email": "chgossett@una.edu",
    "Image": "",
    "Classification": "Computer Information Systems",
    "Contact Info": "256-765-4410"
  },
  {
    "Name": "Dr. Janet Jenkins",
    "Email": "jltruitt@una.edu",
    "Image": "",
    "Classification": "Computer Science",
    "Contact Info": "256-765-4601"
  },
  {
    "Name": "Dr. James Jerkins",
    "Email": "jajerkins@una.edu",
    "Image": "",
    "Classification": "Computer Science",
    "Contact Info": "256-765-5036"
  },
  {
    "Name": "Dr. Andrew Potter",
    "Email": "apotter1@una.edu",
    "Image": "",
    "Classification": "Computer Information Systems",
    "Contact Info": "256-765-4665"
  },
  {
    "Name": "Dr. Patricia Roden",
    "Email": "plrodem@una.edu",
    "Image": "",
    "Classification": "Mathematics/Computer Science",
    "Contact Info": "256-765-4478"
  },
  {
    "Name": "Dr. Mark Terwilliger",
    "Email": "mterwilliger@una.edu",
    "Image": "",
    "Classification": "Computer Science",
    "Contact Info": "256-765-4828"
  },
  {
    "Name": "Dr. Jason Watson",
    "Email": "jwatson5@una.edu",
    "Image": "",
    "Classification": "Computer Information Systems",
    "Contact Info": "256-765-4689"
  },
  {
    "Name": "Dr. Xihui\"Paul\" Zhang",
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