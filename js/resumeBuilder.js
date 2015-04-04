var skills = ["C#", "C++", "NXOpen", "Other stuff"];


var contact1 = {
	"mobile" : "123-456-7890",
	"email" : "email@gmail.com",
	"github" : "https://github.com/davidmchris",
	"twitter" : "None",
	"location" : "Some address",
  
};

var bio = {
	"name" : "David Christensen",
	"role" : "Design Engineer",
  "contacts" : contact1,
	"welcomeMessage" : "Hello",
	"skills" : skills,
  "biopic" : "images/dave.jpg"
};


$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile))
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email))
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github))
$("#header").append(HTMLbioPic.replace("%data%", bio.biopic))
