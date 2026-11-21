const loginForm = document.querySelector('#loginForm');
const registerForm = document.querySelector('#registerForm');

let errors = {};

registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle form submission
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirm_password = event.target.confirm_password.value;

    console.log({ name, email, password }); // Access the name, email and password input values

    //Run Validation
    if (password !== confirm_password) {
        errors.confirm_password = "Passwords do not match";
    }
    if (Object.keys(errors).length > 0) {
        // Display validation errors

        const confirmPasswordErrorSpan = document.querySelector('#confirm-password-error');
        if (confirmPasswordErrorSpan) {
            confirmPasswordErrorSpan.textContent = errors.confirm_password || '';
        }
    }
})

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle form submission
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log({ email, password }); // Access the email and password input values
})