let password = document.getElementById("password");
let toggoleImg = document.getElementById("toggle-img");

toggoleImg.onclick = function () {
	if (password.type == "password") {
		password.type = "text";
		toggoleImg.src = "./images/eye-open.png";
	} else {
		password.type = "password";
		toggoleImg.src = "./images/eye-close.png";
	}
};
