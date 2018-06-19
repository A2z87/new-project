var css = document.querySelector("h3");
var css1 = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button1= document.querySelector(".button1");
var button2= document.querySelector(".button2");
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	css1.innerHTML=(Math.floor(Math.random() * 100) + 1);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

body.onload= setGradient() 

body.addEventListener("load", setGradient());

function random1(){
	css1.innerHTML=(Math.floor(Math.random() * 100) + 1);

}

button1.addEventListener("click",setGradient());
button2.addEventListener("click",setGradient());
