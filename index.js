function submit() {
	alert("Message sent to administrator !");
}

function openMenu() {
	var main = document.getElementsByClassName("main");
	if (main[0].className === "main") {
		main[0].classList.add("responsive");
	}
	else {
		main[0].className = "main";
	}
	
	var menu = document.getElementsByClassName("mobile-menu");
	if (menu[0].className === "mobile-menu") {
		menu[0].classList.add("responsive");
	}
	else {
		menu[0].className = "mobile-menu";
	}
	
	var socials = document.getElementsByClassName("mobile-socials");
	if (socials[0].className === "mobile-socials") {
		socials[0].classList.add("responsive");
	}
	else {
		socials[0].className = "mobile-socials";
	}
}

function post() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var title = document.getElementById("title").value;
	
	var posts = document.getElementById("posts");
	
	var post = document.createElement("div");
	var postTitle = document.createElement("h3");
	var postMessage = document.createElement("p");
	var postName = document.createElement("p");

	postTitle.textContent = title;

	message = message.trim();

	var array = [];
	var lastPos = 0;
	var pos = 0;
	var i = 0;
	while (pos != -1) {
		pos = message.indexOf("```", lastPos);
		if(pos != -1) {
			if(pos != lastPos) {
				array.push("t" + message.slice(lastPos, pos));
			}
			lastPos = pos+3;
			pos = message.indexOf("```", lastPos);
			if(pos != -1) {
				array.push("p" + message.slice(lastPos, pos));
				lastPos = pos+3;
			}
		}
		else
		{
			array.push("t" + message.slice(lastPos, message.length));
		}
	}

	console.log(array);

	for (i = 0, len = array.length; i < len; i++) {
		var id = array[i].slice(0,1);
		var text = array[i].slice(1, array[i].length);
		if(id == "t") {
			textNode = document.createTextNode(text);
			postMessage.appendChild(textNode);
		}
		if(id == "p") {
			codeNode = document.createElement("code");
			textNode = document.createTextNode(text);
			codeNode.appendChild(textNode);
			preNode = document.createElement("pre");
			preNode.appendChild(codeNode);
			postMessage.appendChild(preNode);
		}
	}
	
	if (email) {
		postName.textContent = name + " <" + email + ">";
	}
	else {
		postName.textContent = name;
	}
	
	post.classList.add("post");
	postName.classList.add("author");
	
	post.appendChild(postTitle);
	post.appendChild(postMessage);
	post.appendChild(postName);
	
	posts.appendChild(post);
}

function articles() {
	var titles = document.getElementsByClassName("title");
	for (var i=0; i<titles.length; i++) {
		titles[i].addEventListener("click", function() {
			this.classList.toggle("opened");
			var content = this.nextElementSibling;
			if (content.style.maxHeight) {
				content.style.maxHeight = null;
			}
			else {
				content.style.maxHeight = content.scrollHeight + "px";
			} 
		});
	}
}