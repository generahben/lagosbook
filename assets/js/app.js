const loginForm = document.querySelector('#loginForm');
const registerForm = document.querySelector('#registerForm');

let errors = {};
let successMessage = '';

if (registerForm) {
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

        //Store the Data
        let users = [];
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            users = JSON.parse(storedUsers);
        }
        users.push({ name, email, password });

        localStorage.setItem('users', JSON.stringify(users));

        successMessage = "Registration successful!";
        event.target.reset(); // Reset the form fields
    })
}

if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle form submission
        const email = event.target.email.value;
        const password = event.target.password.value;

        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const user = storedUsers.find(user => user.email === email && user.password === password);

        if (user) {
            // Successful login
            alert('Login successful!');
            // Redirect to another page or perform any other action
        } else {
            // Invalid credentials
            alert('Invalid email or password. Please try again.');
        }

        console.log({ email, password }); // Access the email and password input values
    })
}