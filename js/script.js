const fname = document.getElementById("first_name");
const lname = document.getElementById("last_name");
const mail = document.getElementById("user_mail");
const password = document.getElementById("password");
const confirmation = document.getElementById("confirm");
const submits = document.getElementById("submit");
const inputs = document.querySelectorAll("input");
const passcontainer = document.getElementById("passwordcontainer");
const alerts = document.getElementById("alerts");
const btn = document.querySelector(".btn");
const nums = document.querySelector(".number");
const len = document.querySelector(".len");
const lower = document.querySelector(".lower-upper");

password.addEventListener("focus", () => {
	alerts.classList.add("shown");
	btn.classList.add("down");
});
password.addEventListener("blur", () => {
	alerts.classList.remove("shown");
	btn.classList.remove("down");
});
password.addEventListener("keyup", () => {
	if (/\d/.test(password.value)) {
		nums.style.color = "#1b4543";
	} else {
		nums.style.color = "var(--red-clr)";
	}
	if (/(?=.*[a-z])(?=.*[A-Z])/.test(password.value)) {
		lower.style.color = "#1b4543";
	} else {
		lower.style.color = "var(--red-clr)";
	}
	if (/.{8,}/.test(password.value)) {
		len.style.color = "#1b4543";
	} else {
		len.style.color = "var(--red-clr)";
	}

	if (
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password.value)
	) {
		alerts.classList.add("correct");
	} else {
		alerts.classList.remove("correct");
	}
});
confirmation.addEventListener("keyup", () => {
	if (password.value === confirmation.value) {
		confirmation.style.borderColor = "#1b4543";
		console.log("sah");
	} else {
		confirmation.style.borderColor = "var(--red-clr)";
	}
});
