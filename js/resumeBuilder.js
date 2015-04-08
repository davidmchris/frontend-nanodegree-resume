var bio = {
	"name" : "David Christensen",
	"role" : "Engineering Automation Programmer",
  "contacts" : [{
    "mobile" : "123-456-7890",
    "email" : "fake_address@gmail.com",
    "github" : "https://github.com/davidmchris",
    "twitter" : "None",
    "location" : "Some place"}],
	"welcomeMessage" : "Hello fellow lover of the arts. Welcome to the painting...",
	"skills" : ["C++","C#","NX","Web services"],
  "biopic" : "images/dave.jpg"
};

var work = {
  "jobs" : [ 
  {
       "employer" : "ESCO Corporation", 
       "title" : "Design Engineer", 
       "location" : "Portland, OR", 
       "dates" : "April 2012 - Current",
       "description" : "Design and write software to automate the engineering process." 
  }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Plate Tool",
      "dates": "Apr 2014 - Aug 2014",
      "description": "Created a tool that reduces design time from 14 weeks to 4 weeks.",
      "images": ["http://placehold.it/75x75"]
    }
  ]
}

var education = {
  "schools" : 
  [
    {
      "name": "BYU-Idaho",
      "location": "Rexburg, ID",
      "degree": "None",
      "majors": ["Mechanical Engineering"],
      "dates": 2007,
      "url": "www.byui.edu"
    },
    {
      "name": "BYU-Provo",
      "location": "Provo, UT",
      "degree": "BS, MS",
      "majors": ["Mechanical Engineering"],
      "dates": 2012,
      "url": "www.byu.edu"
    }
  ],
  "onlineCourses": 
  [
    {
      "title": "Software Development Lifecycles",
      "school": "Udacity",
      "date": 2015,
      "url": "www.udacity.com"
    },
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "date": 2015,
      "url": "www.udacity.com"
    },
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "date": 2015,
      "url": "www.udacity.com"
    }
  ]
}

$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts[0].mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts[0].email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts[0].github));


if(bio.skills.length > 0)
{
  $("#header").append(HTMLskillsStart);
  var index;
  for(index = 0; index < bio.skills.length; index++)
  {
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[index]));
  }
}

function displayWork()
{
  for(item in work.jobs)
  {
    $("#workExperience").append(HTMLworkStart);
    var job = HTMLworkEmployer.replace("%data%",work.jobs[item].employer)
    job = job + HTMLworkTitle.replace("%data%",work.jobs[item].title);
    job = job + HTMLworkLocation.replace("%data%",work.jobs[item].location);
    job = job + HTMLworkDates.replace("%data%",work.jobs[item].dates);
    job = job + HTMLworkDescription.replace("%data%",work.jobs[item].description);
    
    $(".work-entry:last").append(job);
    
  }
}

displayWork();

projects.display = function()
{
  for(var i=0; i<projects.projects.length; i++)
  {
    var proj = projects.projects[i];
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", proj.title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", proj.dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", proj.description));
    for(var j=0; j<proj.images.length; j++)
    {
      $(".project-entry:last").append(HTMLprojectImage.replace("%data%", proj.images[j]));
    }
  }
}

projects.display();
