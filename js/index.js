const elForm = document.querySelector(".main-wrapper__form");
const nameInput = document.querySelector(".main-wrapper__name-input");
const mailInput = document.querySelector(".main-wrapper__mail-input");
const passwordInput = document.querySelector(".main-wrapper__password-input");
const passwordCheckInput = document.querySelector(".main-wrapper__password2-input");

elForm.addEventListener("submit", e => {
    e.preventDefault()

    checkInputs()
})

const checkInputs = () => {

    const nameInputValue = nameInput.value.trim();
    const mailInputValue = mailInput.value.trim();
    const passwordInputValue = passwordInput.value.trim();
    const passwordCheckInputValue = passwordCheckInput.value.trim()

    if (nameInputValue === "" || nameInputValue == null) {
        setError(username, "Username cannot be blank")
    } else {
        setSuccess(username)
    }

    if(mailInputValue === '' || mailInputValue == null) {
		setError(email, 'Email cannot be blank');
	} else if (!isEmail(mailInputValue)) {
		setError(email, 'Not a valid email');
	} else {
		setSuccess(email);
	}

    if (passwordInputValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else {
		setSuccess(password);
    }

	if(passwordCheckInputValue === '') {
		setError(password2, 'Password cannot be blank');
	} else if(passwordInputValue !== passwordCheckInputValue) {
		setError(password2, 'Password does not match');
	} else{
		setSuccess(password2);
	}

}


function setError(input, message) {
    const formControl = input.parentElement;
    const p = formControl.querySelector(".alert");

    //Add message
    p.innerHTML = message;

    //Add className
    nameInput.classList.add("input-error");
    mailInput.classList.add("input-error");
    passwordInput.classList.add("input-error");
    passwordCheckInput.classList.add("input-error");
    p.classList.add("error");
}

function setSuccess(input) {
    const formControl = input.parentElement;
    const p = formControl.querySelector(".alert");

    //Add className
    nameInput.className = "main-wrapper__name-input form-input success";
    mailInput.className = "main-wrapper__mail-input form-input success";
    passwordInput.className = "main-wrapper__password-input form-input success";
    passwordCheckInput.className = "main-wrapper__password-input form-input success";
    p.className = "alert";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}