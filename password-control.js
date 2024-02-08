const passwd = document.querySelector("#password");
const confirmPasswd = document.querySelector("#confirm-password");
const errorMessage = document.querySelector(".passwd-error");

if (!passwd.value) passwd.classList.add('input--reqired');
if (!confirmPasswd.value) confirmPasswd.classList.add('input--reqired');

function validatePasswd() {
    if (!passwd.value != !confirmPasswd.value) {
       
    }
    else {
        
    }
}

[passwd, confirmPasswd].forEach((pass) => pass.addEventListener('change', validatePasswd));