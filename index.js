function submit() {
	alert("Message sent to administrator !");
}

function openMenu() {
	var main = document.getElementsByClassName("main");
	if (main[0].className === "main") {
		main[0].className += " responsive";
	}
	else {
		main[0].className = "main";
	}
	
	var menu = document.getElementsByClassName("mobile-menu");
	if (menu[0].className === "mobile-menu") {
		menu[0].className += " responsive";
	}
	else {
		menu[0].className = "mobile-menu";
	}
	
	var socials = document.getElementsByClassName("mobile-socials");
	if (socials[0].className === "mobile-socials") {
		socials[0].className += " responsive";
	}
	else {
		socials[0].className = "mobile-socials";
	}
}