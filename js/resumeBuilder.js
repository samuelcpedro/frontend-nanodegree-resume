/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*	Will append in div with id = "main", after div with id="lets-connect" 
because div main has content */
//$("#main").append(["Samuel Pedro"]);

//Quiz 1
// console.log(299792458*100*(1/1000000000));

//var declares a new variable for all datatypes
//var firstName  = "james";
//var age = 32;
//console.log(firstName);

//var awesomeThoughts = "I am Samuel and I am AWESOME!";
////console.log(awesomeThoughts);

////[string].replace([old][new]);
//var email = "cameron@audacity.com";
//var newEmail = email.replace("udacity","gmail");

//console.log(email);
//console.log(newEmail);

//var funThoughts = awesomeThoughts.replace("AWESOME","FUN")

//$("#main").append(funThoughts);

//var name = "Samuel Pedro";
//var role = "Webdeveloper";

//var formattedName = HTMLheaderName.replace("%data%",name);
//var formattedRole = HTMLheaderRole.replace("%data%",role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

//var skills = ["awesomeness","programming","teaching","JS"];
//$("#main").append(skills);
//$("#main").append(skills[0]);
//$("#main").append(skills.length);

//var bio = {
//	"name"		: "James", 
//	"age"		: 32,
//	"skills"	: skills
//};

//$("#main").append(bio.name);

//bio.city = "Mountain View";
//bio.email = "james@example.com";
//$("#main").append(bio.city);

//or

//bio["city"] = "Mountain View";
//bio["email"] = "james@example.com";
//$("#main").append(bio["city"]);

//var work = {};

//work.jobPosition	=	"jobPosition";
//work.employer		=	"employer";
//work.yearsWork		=	"yearsWork";
//work.cityBusiness	=	"cityBusiness";

//var education = {};

//education["nameLastSchool"]		= "nameLastSchool";
//education["yearsAttended"]		= "yearsAttended";
//education["schoolCity"]			= "schoolCity";

//var education = {
//	"schools": [
//		{
//			"name":"Nome da escola",				// objecto 0
//			"city":"Cidade",						// objecto 0
//			"degree":"BA",							// objecto 0
//			"major":["CompSci","French"]			// objecto 0
//		},
//		{
//			"name":"Nome da escola 2",				// objecto 1
//			"city":"Cidade 2",						// objecto 1
//			"degree":"BA",							// objecto 1
//			"major":["CompSci","French","Latim"]	// objecto 1
//		}
//	]
//};

/* QUIZS */
/*
	//var sampleArray = [0,0,7];

	//var incrementLastArrayElement = function(_array) {
	//    var newArray = [];
	//    // Your code should make newArray equal to an array that has the same
	//    // values as _array, but the last number has increased by one.
	//    
	//    // For example:
	//    // _array = [1, 2, 3];
	//    // turns into:
	//    // newArray = [1, 2, 4];
	//    
	//    // Your code goes in here!
	//    newArray = _array;
	//    newArray = _array.slice(0);
	//    var lastNumber = newArray.pop();
	//    newArray.push(lastNumber + 1);
	//    // Don't delete this line!
	//    return newArray;
	//};

	//// Did your code work? The line below will tell you!
	//console.log(incrementLastArrayElement(sampleArray));

	//var name = "AlbERt EINstEiN";

	//function nameChanger(oldName) {
	//    var finalName = oldName;
	//    // Your code goes here!
	//    var splitedName = oldName.split(' ');
	//    var firstName = splitedName[0].charAt(0).toUpperCase() + splitedName[0].slice(1).toLowerCase();
	//    var secondName = splitedName[1].toUpperCase();
	//    finalName = firstName + " " + secondName;
	//    // Don't delete this line!
	//    return finalName;
	//};

	//function nameChangerV2(oldName) {
	//    var finalName = oldName;
	//    var names = oldName.split(" ");
	//    names[1] = names[1].toUpperCase();
	//    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	//    finalName = names.join(" ");
	//    return finalName;
	//}

	//// Did your code work? The line below will tell you!
	//console.log(nameChanger(name));
	//console.log(nameChangerV2(name));

*/

var work = {
	"jobs": [{
		"employer": "Nos Açores",
		"title": "Webdeveloper",
		"location": "Ponta Delgada",
		"dates": "2014",
		"description": "Desenvolvimento de uma plataforma de partilha e recolha de informação da empresa e para a empresa, controlo de qualidade do desempenho dos operadores no call center."
	}, {
		"employer": "Janela Activa",
		"title": "Webdeveloper",
		"location": "Ponta Delgada",
		"dates": "2010",
		"description": "Desenvolvimento de módulos para um CMS e CRM da empresa."
	}]
};

var projects = {
	"projects": [{
		"title": "Pai",
		"dates": "2013",
		"description": "Pai de duas pequininas pestinhas",
		"images": ["images/face.png", "images/face.png"]
	}]
};

var bio = {
	"name": "Samuel Pedro",
	"role": "Webdeveloper",
	"welcomeMessage": "Hello!",
	"biopic": "images/face.png",
	"contacts": {
		"mobile": "919191919",
		"email": "name@sample.com",
		"github": "samuelcpedro",
		"twiter": "SamuelCPedro",
		"blog": "www.samuelcpedro.com",
		"location": "Ponta Delgada"
	},
	"skills": ["awesomeness", "programming", "teaching", "JS"]
};

var education = {
	"schools": [{
		"name": "Escola Superior de Tecnologia e Gestão",
		"location": "Leiria",
		"degree dates": 2013,
		"major": ["Computer science"],
		"url": "http://www.ipleiria.pt/estg/"
	}, {
		"name": "Escola Secundária João de Barros",
		"location": "Corroios",
		"degree dates": 2003,
		"major": ["Computer science"],
		"url": "http://www.secundariajbarros.net/"
	}],
	"onLineCourses": [{
		"title": "JavaScript Syntax",
		"school": "udacity",
		"dates": 2014,
		"url": "https://classroom.udacity.com/courses/ud804"
	}]
};





//$("#main").append(bio.name);

//var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
//var formattedMobile	= HTMLcontactGeneric.replace("%contact%","mobile").replace("%data%",bio.contact);
//var formattedEmail	= HTMLcontactGeneric.replace("%contact%","email").replace("%data%",bio.email);

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

var formattedMobile 		= HTMLmobile.replace("%data%",bio.contact.mobile);
var formattedEmail 			= HTMLemail.replace("%data%",bio.contact.email);
var formattedTwitter 		= HTMLtwitter.replace("%data%",bio.contact.twiter);
var formattedGithub 		= HTMLgithub.replace("%data%",bio.contact.github);
var formattedBlog 			= HTMLblog.replace("%data%",bio.contact.blog);
var formattedLocation 		= HTMLlocation.replace("%data%",bio.contact.location);

var formattedbioPic			= HTMLbioPic.replace("%data%",bio.pictureURL);
var formattedwelcomeMsg		= HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);

var formattedskillsStart	= HTMLskillsStart;
var formattedskill1			= HTMLskills.replace("%data%",bio.skills[0]);
var formattedskill2			= HTMLskills.replace("%data%",bio.skills[1]);
var formattedskill3			= HTMLskills.replace("%data%",bio.skills[2]);
var formattedskill4			= HTMLskills.replace("%data%",bio.skills[3]);

var formattedWorkStart			=	HTMLworkStart;
var formattedWorkEmployer		=	HTMLworkEmployer.replace("%data%",work.jobPosition);
var formattedWorkTitle			=	HTMLworkTitle.replace("%data%",work.employer);
var formattedWorkDates			=	HTMLworkDates.replace("%data%",work.yearsWork);
var formattedWorkLocation		=	HTMLworkLocation.replace("%data%",work.cityBusiness);
var formattedWorkDescription	=	HTMLworkDescription.replace("%data%",work.cityBusiness);

var formattedSchoolStart	=	HTMLschoolStart;
var formattedSchoolName		=	HTMLschoolName.replace("%data%",education["nameLastSchool"]);
var formattedSchoolDegree	=	HTMLschoolDegree.replace("%data%",education["yearsAttended"]);
var formattedSchoolDates	=	HTMLschoolDates.replace("%data%",education["schoolCity"]);
var formattedSchoolLocation	=	HTMLschoolLocation.replace("%data%",work.cityBusiness);
var formattedSchoolMajor	=	HTMLschoolMajor.replace("%data%",work.cityBusiness);

//Append Name and Role in div header
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
//Append Contacts in div topContacts
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);
//Append Image and Welcome Message in div header
$("#header").append(formattedbioPic);
$("#header").append(formattedwelcomeMsg);
//Append skills in ul element inside div header
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedskill1);
$("#skills").append(formattedskill2);
$("#skills").append(formattedskill3);
$("#skills").append(formattedskill4);

$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedWorkEmployer);
$(".work-entry").append(formattedWorkTitle);
$(".work-entry").append(formattedWorkDates);
$(".work-entry").append(formattedWorkLocation);
$(".work-entry").append(formattedWorkDescription);

$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedSchoolName);
$(".education-entry").append(formattedSchoolDegree);
$(".education-entry").append(formattedSchoolDates);
$(".education-entry").append(formattedSchoolLocation);
$(".education-entry").append(formattedSchoolMajor);

