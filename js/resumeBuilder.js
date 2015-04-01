// $("#main").append("David Christensen");

var formattedName = HTMLheaderName.replace("%data%","David Christensen");
var formattedRole = HTMLheaderRole.replace("%data%","Design Engineer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
  "name" : formattedName,
  "role" : formattedRole,
  "contactInfo" : "contactInfo",
  "pictureURL" : "url",
  "welcomeMessage" : "Hi.",
  "skills" : "skills"
}
