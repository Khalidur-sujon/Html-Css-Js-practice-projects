const inputBox = document.querySelector(".inputBox");
const password = document.querySelector("#password");
const passLength = 12;

const uppperChar = "QAZWSXEDCRFVTGBYHNUJMIKOLP";
const lowerChar = "qazwsxedcrfvtgbyhnujmikolp";
const number = "0987654321";
const symbol = '~!@#$%^&*()_+}|"{:?><<>?@';

const allChars = uppperChar + lowerChar + number + symbol;

function passwordGenerator() {
	let str = "";
	str += uppperChar[Math.floor(Math.random() * uppperChar.length)];
	str += lowerChar[Math.floor(Math.random() * lowerChar.length)];
	str += number[Math.floor(Math.random() * number.length)];
	str += symbol[Math.floor(Math.random() * symbol.length)];

	while (passLength > str.length) {
		str += allChars[Math.floor(Math.random() * allChars.length)];
	}
	password.value = str;
}

function copyText() {
	password.select();
	document.execCommand("copy");
}
