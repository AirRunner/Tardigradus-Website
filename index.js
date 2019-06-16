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
    message = "    " + message;
    var messageArray = message.split(/```/);

    for (var i = 0, len = messageArray.length; i < len; i++) {
        if(i%2 == 0) {
            var text = document.createTextNode(messageArray[i]);
	        postMessage.appendChild(text);
        }
        else {
            var code = document.createElement("code");
            var text = document.createTextNode(messageArray[i]);
	        code.appendChild(text);
	        postMessage.appendChild(code);
        }
    }
	

	postName.textContent = name + " <" + email + ">";
	
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
