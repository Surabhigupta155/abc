document.getElementById("demo").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "You are the first thing that comes into my mind when I get up, and you are the last thing I think of when I go back to sleep. In between you are the one I constantly think of, feeling blessed everytime that I have you. Adoring your sincerity, honestly, cuteness... Hoping to spend my whole life with you...";
}

$(function(){

	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if(screenWidth < 768){
			$("#collapsable-nav").collapse('hide');
		}
	});
});

/*rain*/

function getInput() {
    return document.getElementById("answer").value;
}

var submitButton = document.getElementById("submit").addEventListener("click", mySubmit);

function mySubmit() {
    var text;
    var name=getInput();
    text = "Tadaa "+name+" babyyy. Have a nice day dear.";
    document.getElementById("demo").innerText = text;
}


    
