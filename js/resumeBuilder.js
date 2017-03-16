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

var name = "Samuel Pedro";
var role = "Webdeveloper";

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["awesomeness","programming","teaching","JS"];
//$("#main").append(skills);
//$("#main").append(skills[0]);
//$("#main").append(skills.length);

var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    newArray = _array;
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));