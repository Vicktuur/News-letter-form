const sign_up = document.querySelector(".sign-up-page");
const success = document.querySelector(".success-page");
const button = sign_up.querySelector("button");
const button2 = success.querySelector("button");
const spanValue = document.querySelector(".span-value");
const email = document.querySelector(".email");
const error = document.querySelector(".error");
const input = document.querySelector("input");

button.addEventListener('click', (e) => {
    const emailVal = email.value.trim() //removes white space on input
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailVal.match(pattern)) {
        e.preventDefault()
        sign_up.classList.add("activepage"); //hides sign-up form
        success.classList.add("activepage"); //displays success message
        spanValue.textContent = email.value; //transfers email to success page
    }else if (emailVal === '' || emailVal === null) {
        e.preventDefault()
        input.classList.add("active")
        error.classList.add("active")
        error.innerHTML = "Empty email field"
    }else {
        e.preventDefault();
        input.classList.add("active")
        error.classList.add("active")
        error.innerHTML = "Vald email required"
        // input.value = ""  //emptyies the input after an error
    }
})

// //refreshes page onclick dismiss message
button2.onclick = () => {
    window.location.reload();
}