let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let msgError = document.getElementById("msg-error");
let submitError = document.getElementById("submit-error");

function validName() {
	let contactName = document.getElementById("contact-name").value;
	if (contactName.length == 0) {
		nameError.innerHTML = "Name is required";
		return false;
	}
	if (!contactName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
		nameError.innerHTML = "Write full name";
		return false;
	}
	nameError.innerHTML = '<i class="fas fa-circle-check"></i>';
	return true;
}

function validPhone() {
	let contactPhone = document.getElementById("contact-phone").value;
	if (contactPhone.length == 0) {
		phoneError.innerHTML = "Phone is required";
		return false;
	}
	if (contactPhone.length != 10) {
		phoneError.innerHTML = "Phone no should be 10 digits";
		return false;
	}

	if (!contactPhone.match(/^[0-9]{10}$/)) {
		phoneError.innerHTML = "Phone no is required";
		return false;
	}
	phoneError.innerHTML = '<i class="fas fa-circle-check"></i>';
	return true;
}
function validEmail() {
	let email = document.getElementById("contact-email").value;
	if (email.length == 0) {
		emailError.innerHTML = "Email is required";
		return false;
	}
	if (!email.match(/^[\w.-]+[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
		emailError.innerHTML = "Email Invalid";
		return false;
	}
	emailError.innerHTML = '<i class="fas fa-circle-check"></i>';
	return true;
}
function validMessage() {
	let message = document.getElementById("contact-msg").value;
	let required = 30;
	let left = required - message.length;

	if (message.length == 0) {
		msgError.innerHTML = "Message required";
		return false;
	}

	if (left > 0) {
		msgError.innerHTML = left + " more character required";
		return false;
	}

	msgError.innerHTML = '<i class="fas fa-circle-check"></i>';
	return true;
}

function validateForm() {
	if (!validName() || !validEmail() || !validPhone() || !validMessage()) {
		submitError.style.display = "block";
		submitError.innerHTML = "Please fix error to submit";
		setTimeout(() => {
			submitError.style.display = "none";
		}, 3000);
		return false;
	}
}
