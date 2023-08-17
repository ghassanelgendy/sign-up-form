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
const numbs = document.querySelector(".number");
const len = document.querySelector(".len");
const lower = document.querySelector(".lower-upper");
const first_form = document.getElementById("firstform");
const login_btn = document.getElementById("login");
let first_click = true;
let mode = true;

first_form.addEventListener("submit", (e) => {
	e.preventDefault();
});
password.addEventListener("focus", () => {
	if (mode) {
		alerts.classList.add("shown");
		btn.classList.add("down");
	}
});
password.addEventListener("blur", () => {
	alerts.classList.remove("shown");
	btn.classList.remove("down");
});
password.addEventListener("keyup", () => {
	if (/\d/.test(password.value)) {
		numbs.style.color = "#1b4543";
	} else {
		numbs.style.color = "var(--red-clr)";
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
function toastFunction() {
	var x = document.getElementById("toast");
	x.className = "show";
	setTimeout(function () {
		x.className = x.className.replace("show", "");
	}, 3000);
}

login_btn.addEventListener("click", (e) => {
	const registrations = document.querySelectorAll(".r");
	console.log(mode);
	if (mode) {
		mode = false;
		registrations.forEach((reg) => {
			reg.classList.add("displaynone");
			first_form.style.flexDirection = "column";
		});
		login_btn.previousElementSibling.textContent = "Don't have an account?";
		submits.textContent = "Login";
		login_btn.textContent = "Register";
	} else {
		mode = true;
		registrations.forEach((reg) => {
			first_form.style.flexDirection = "row";
			reg.classList.remove("displaynone");
		});
		login_btn.previousElementSibling.textContent = "Already have an account?";
		submits.textContent = "Create Account";
		login_btn.textContent = "Login";
	}
});
