What is the DOM?

This course isn't about HTML and CSS but they keep showing up. Why is that? HTML, CSS and JavaScript are the three components that make almost every website. As part of the process of building websites, browsers convert all of the HTML they receive into a JavaScript object called the Document Object Model (DOM).

In fact, from the console, you can examine the DOM for any website (including this one!). By examining the DOM, you can learn pretty much everything about a website.

Your Challenge
For this challenge, I want you to find out the height of the classroom window (in pixels).

To do so, you'll first need to open the console. Got it open? Select the classroom window. Try typing document.getElementsByClassName("text-atom")[0] and press enter.

See the HTML that comes up? That's the HTML that makes up the classroom. It's actually a JavaScript object called an Element with properties you can access.

Read up on Element properties. Can you figure out the height of the classroom window? Your answer will depend on the size of your browser.

Click "Next" once you've figured out how many pixels tall your classroom window is.

-------------------
Protecting the Resume

Let's imagine that instead of building just for your own resume, you're building a webapp that takes in data from other users on the internet and turns it into a resume that they can use.

How might you make sure that the resume will still display correctly? Or even worse, imagine someone sets their name to equal <script src="http://hackyourwebsite.com/eviljavascript.js"></script>. Can you make sure your resume doesn't run their malicious script?

Your Challenge
For this quiz, your goal is to make sure that if a user puts HTML in their resume's JSON, it doesn't break the resume!

How? You need to make sure that the < and > from their HTML get turned into harmless strings.

When you're ready to replace all of the < and >, click "Continue to Quiz!"

var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};
console.log(weirdObject.property$);
console.log(weirdObject.property1);
console.log(weirdObject[property$]);
console.log(weirdObject[property 3);

console.log(weirdObject.property);		//true
console.log(weirdObject.property1);		//true
console.log(weirdObject.property-2);	//false
console.log(weirdObject.property 3);	//false
console.log(weirdObject.property$);		//true
console.log(weirdObject. property);		//false
console.log(weirdObject.property());	//false
console.log(weirdObject.property[]);	//false
console.log(weirdObject.8property);		//false

console.log(weirdObject["property"]);
console.log(weirdObject["property1"]);
console.log(weirdObject["property-2"]);
console.log(weirdObject["property 3"]);
console.log(weirdObject["property$"])
console.log(weirdObject[" property"]);
console.log(weirdObject["property()"]);
console.log(weirdObject["property[]"]);
console.log(weirdObject["8property"]);