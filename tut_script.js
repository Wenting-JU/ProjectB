//
// JS File for DOC HUB
// Last updated: 2021-05-19 11:30 AM
// Charlotte and Laura


// void function; no return.
function init()
{
	console.log("The 'tut_script.js' file has been loaded.");
}

// init function call.
init();


// void function; no return. Opens the main page in the existing window.
function homePage()
{
	window.open("homepage.html", "_self");
}
function myProjects(){
	window.open("myProjects.html", "_self");
}

function search(){
	window.open("search.html", "_self");
}
function logOut(){
	window.open("loginpage.html", "_self");
}
function searchFunction(){
	
	//declare variables
	var input, filter, ul, li, a, i, txtValue;
	intput = document.getElementById("search");
	filter = input.value.toUpperCase();
	
	//need a full list of the projects to search through
}
function newProject(){
	window.open("newProject.html", "_self");
}

function newDocs(){
	window.open("newDocs.html", "_self");
}

function newPDoc(){
	window.open("newPDoc.html", "_self");
}

function newCDoc(){
	window.open("newCDoc.html", "_self");
}

function newUDoc(){
	window.open("newUDoc.html", "_self");
}



