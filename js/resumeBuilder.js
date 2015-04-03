var skills = ["C#", "C++", "NXOpen", "Other stuff"];

var bio = {
	"name" : "David Christensen",
	"role" : "Design Engineer",
	"mobile" : "123-456-7890",
	"email" : "email@gmail.com",
	"github" : "https://github.com/davidmchris",
	"pictureURL" : "images/dave.jpg",
	"welcomeMessage" : "Hello",
	"skills" : skills
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.mobile))
$("#topContacts").append(HTMLemail.replace("%data%", bio.email))
$("#topContacts").append(HTMLgithub.replace("%data%", bio.github))
$("#header").append(HTMLbioPic.replace("%data%", bio.pictureURL))
