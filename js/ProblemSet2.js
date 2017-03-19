//Problem Set 2


//Function-Level Scope

// ###Example 1
var outsideExample = "First string";

function example() {
    var outsideExample = "Second string";
}

example();

console.log(outsideExample);//"First string";

// ###Example 2
var outsideExample = "First string";

function example() {
    outsideExample = "Second string";
}

example();

console.log(outsideExample);//"Second string";

//****************************************************

//Block-Level Scope

// ###Example 1
var outsideExample = "First string";
if (true) {
    var outsideExample = "Second string";
    console.log(outsideExample);
}
console.log(outsideExample);

//****************************************************

//Function Declaration Syntax

// ###Example 1

example1();

function example1() {
    console.log("Ran the example");
}

// ### Example 2

example2();

var example2 = function() {
    console.log("Ran the example");
}