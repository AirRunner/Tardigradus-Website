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

function post() {
	var name = document.getElementById("name").value;
//	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var title = document.getElementById("title").value;
	
	var posts = document.getElementById("posts");
	
	var post = document.createElement("div");
	var postTitle = document.createElement("h3");
	var postMessage = document.createElement("p");
	var postName = document.createElement("p");
	
	postTitle.textContent = title;
	postMessage.textContent = message;
	postName.textContent = name;
	
	post.classList.add("post");
	postName.classList.add("author");
	
	post.appendChild(postTitle);
	post.appendChild(postMessage);
	post.appendChild(postName);
	
	posts.appendChild(post);
}