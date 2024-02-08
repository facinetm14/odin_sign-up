const passwd = document.querySelector("#password");
const confirmPasswd = document.querySelector("#confirm-password");
const errorMessage = document.querySelector(".passwd-error");
const btnSubmit = document.querySelector("#btn-submit");
const signUpForm = document.querySelector("#sign-up-form");
const statusClass = {
    ERROR: 'input--required',
    VALID: 'input--validate'
};

if (!passwd.value) passwd.classList.add(statusClass.ERROR);
if (!confirmPasswd.value) confirmPasswd.classList.add(statusClass.ERROR);

const isValidPasswd = (pass, confirm) => {
    if (!pass || !confirm) return false;
    return pass === confirm;
}

const updateStatusDisplay = (statusFrom, statusTo, error = '') => {
    passwd.classList.remove(statusFrom);
    confirmPasswd.classList.remove(statusFrom);
    passwd.classList.add(statusTo);
    confirmPasswd.classList.add(statusTo);
    errorMessage.textContent = error;
}

function validatePasswd() {
    if (isValidPasswd(passwd.value, confirmPasswd.value)) {
        updateStatusDisplay(statusClass.ERROR, statusClass.VALID);
    }
    else updateStatusDisplay(statusClass.VALID, statusClass.ERROR, 'Passwords do not match');
}

confirmPasswd.addEventListener('change', validatePasswd);
btnSubmit.addEventListener('click', () => {
    if (isValidPasswd(passwd.textContent, confirmPasswd.textContent)) {
        signUpForm.submit();
    }
    else updateStatusDisplay(statusClass.VALID, statusClass.ERROR, 'Passwords do not match');
});



