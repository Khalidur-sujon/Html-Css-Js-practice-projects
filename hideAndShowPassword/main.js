let password = document.getElementById("password");
let toggoleImg = document.getElementById("toggle-img");
let msg = document.getElementById("message");
let str = document.getElementById("strength");

password.addEventListener("input", () => {
	if (password.value.length > 0) {
		msg.style.display = "block";
	} else {
		msg.style.display = "none";
	}

	if (password.value.length < 4) {
		str.innerHTML = "weak";
		password.parentNode.style.borderColor = "orange";
		msg.style.color = "orange";
	} else if (password.value.length >= 4 && password.value.length < 8) {
		str.innerHTML = "medium";
		password.parentNode.style.borderColor = "yellow";
		msg.style.color = "yellow";
	} else {
		str.innerHTML = "strong";
		password.parentNode.style.borderColor = "green";
		msg.style.color = "green";
	}
});

toggoleImg.onclick = () => {
	if (password.type == "password") {
		password.type = "text";
		toggoleImg.src = "./images/eye-open.png";
	} else {
		password.type = "password";
		toggoleImg.src = "./images/eye-close.png";
	}
};
