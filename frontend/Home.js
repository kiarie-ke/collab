const loginForm = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const remember = document.getElementById('remember');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

const validateEmail = (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value);
};

const clearErrors = () => {
    emailError.textContent = '';
    passwordError.textContent = '';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    successMessage.style.display = 'none';
};

const showError = (element, text) => {
    element.textContent = text;
    element.style.display = 'block';
};

const showSuccess = (text) => {
    successMessage.textContent = text;
    successMessage.style.display = 'block';
};

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    clearErrors();

    let valid = true;

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (!emailValue) {
        showError(emailError, 'Email is required');
        valid = false;
    } else if (!validateEmail(emailValue)) {
        showError(emailError, 'Enter a valid email address');
        valid = false;
    }

    if (!passwordValue) {
        showError(passwordError, 'Password is required');
        valid = false;
    } else if (passwordValue.length < 6) {
        showError(passwordError, 'Password must be at least 6 characters');
        valid = false;
    }

    if (!valid) {
        return;
    }

    const payload = {
        email: emailValue,
        password: passwordValue,
        remember: remember.checked,
    };

    console.log('Login payload:', payload);

    showSuccess('Login successful! Redirecting...');

    setTimeout(() => {
        successMessage.textContent = 'You are now logged in.';
        loginForm.reset();
    }, 700);
});

// Optional helper for any other page actions
function displayWelcomeMessage() {
    console.log('Welcome to Collab page.');
}

displayWelcomeMessage();