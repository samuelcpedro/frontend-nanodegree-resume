/* Pagespeed Insights */

/*

Google's PageSpeed Insights (PSI) scores websites on their speed. 
A perfect score is 100 and the worst score is 0. 
Alongside the score, PSI provides relevant advice for improvements.

By integrating an automated PSI score into a suite of front-end unit tests, you can periodically check a website's overall speed.
Let's assume you're building the front-end testing framework and you make a call to the PSI API. 
You receive the JSON below as a response.

Create a totalBytes(psiResults) function that iterates through pageStats in the psiResults object and returns the total number of bytes to load the website.

Then, create a ruleList(psiResults) function that iterates through the localizedRuleNames in ruleResults and returns an array of their strings.

*/
var psiResults;

psiResults = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
	"numberResources": 22,
	"numberHosts": 7,
	"totalRequestBytes": "2761",
	"numberStaticResources": 16,
	"htmlResponseBytes": "91981",
	"cssResponseBytes": "37728",
	"imageResponseBytes": "13909",
	"javascriptResponseBytes": "247214",
	"otherResponseBytes": "8804",
	"numberJsResources": 6,
	"numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
   "AvoidBadRequests": {
	"localizedRuleName": "Avoid bad requests",
	"ruleImpact": 0.0
   },
   ...
   "MinifyJavaScript": {
	"localizedRuleName": "Minify JavaScript",
	"ruleImpact": 0.1417,
	"urlBlocks": [
	 {
	  "header": {
	   "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
	   "args": [
		{
		 "type": "BYTES",
		 "value": "1.3KiB"
		},
		{
		 "type": "INT_LITERAL",
		 "value": "0"
		}
	   ]
	  },
	  "urls": [
	   {
		"result": {
		 "format": "Minifying $1 could save $2 ($3% reduction).",
		 "args": [
		  {
		   "type": "URL",
		   "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
		  },
		  {
		   "type": "BYTES",
		   "value": "717B"
		  },
		  {
		   "type": "INT_LITERAL",
		   "value": "1"
		  }
		 ]
		}
	   },
	   ...
	   {
		"result": {
		 "format": "Minifying $1 could save $2 ($3% reduction).",
		 "args": [
		  {
		   "type": "URL",
		   "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
		  },
		  {
		   "type": "BYTES",
		   "value": "258B"
		  },
		  {
		   "type": "INT_LITERAL",
		   "value": "0"
		  }
		 ]
		}
	   }
	  ]
	 }
	]
   },
   ...
   "SpriteImages": {
	"localizedRuleName": "Combine images into CSS sprites",
	"ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
}
See the example here.

//*****************************************************

// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
    // Your code goes here!
	var list = [];
	Object.getOwnPropertyNames(results.formattedResults.ruleResults).forEach(function(value,index,array) {
		list.push(results.formattedResults.ruleResults[value].localizedRuleName);
	});

	return list;
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
	// Your code goes here!
	var countBytes = 0;
	Object.getOwnPropertyNames(results.pageStats).forEach(function(value,index,array) {
		if (value.indexOf("Bytes") != -1 ) {
			//console.log(Number(results.pageStats[value]));
			//console.log(value);
			//console.log(Number(results.pageStats[index]));
			console.log(countBytes);
			countBytes += Number(results.pageStats[value]);
		}
	});

	return countBytes;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
	"kind": "pagespeedonline#result",
	"id": "/speed/pagespeed",
	"responseCode": 200,
	"title": "PageSpeed Home",
	"score": 90,
	"pageStats": {
		"numberResources": 22,
		"numberHosts": 7,
		"totalRequestBytes": "2761",
		"numberStaticResources": 16,
		"htmlResponseBytes": "91981",
		"cssResponseBytes": "37728",
		"imageResponseBytes": "13909",
		"javascriptResponseBytes": "247214",
		"otherResponseBytes": "8804",
		"numberJsResources": 6,
		"numberCssResources": 2
	},
	"formattedResults": {
		"locale": "en_US",
		"ruleResults": {
			"AvoidBadRequests": {
				"localizedRuleName": "Avoid bad requests",
				"ruleImpact": 0.0
			},
			"MinifyJavaScript": {
				"localizedRuleName": "Minify JavaScript",
				"ruleImpact": 0.1417,
				"urlBlocks": [{
					"header": {
						"format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
						"args": [{
							"type": "BYTES",
							"value": "1.3KiB"
						}, {
							"type": "INT_LITERAL",
							"value": "0"
						}]
					},
					"urls": [{
						"result": {
							"format": "Minifying $1 could save $2 ($3% reduction).",
							"args": [{
								"type": "URL",
								"value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
							}, {
								"type": "BYTES",
								"value": "717B"
							}, {
								"type": "INT_LITERAL",
								"value": "1"
							}]
						}
					}, {
						"result": {
							"format": "Minifying $1 could save $2 ($3% reduction).",
							"args": [{
								"type": "URL",
								"value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
							}, {
								"type": "BYTES",
								"value": "258B"
							}, {
								"type": "INT_LITERAL",
								"value": "0"
							}]
						}
					}]
				}]
			},
			"SpriteImages": {
				"localizedRuleName": "Combine images into CSS sprites",
				"ruleImpact": 0.0
			}
		}
	},
	"version": {
		"major": 1,
		"minor": 11
	}
};
Object.getOwnPropertyNames(psinsights.formattedResults.ruleResults).forEach(function(value,index,array) {
		console.log(val + ' -> ' + obj[val]);
	});

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));