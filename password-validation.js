const form = document.querySelector('form');
const errorContainer = document.querySelector('.error');
const password = document.querySelector('input[name=password]');
const confirmPassword = document.querySelector('input[name=confirm-password]');

form.addEventListener('submit', function(event) {
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        let errorStyle = 'border-color: red; padding: 2.5px 0 2.5px 6px; outline-color: red;';

        password.style.cssText = errorStyle;
        confirmPassword.style.cssText = errorStyle;

        const error = document.createElement('p');

        error.classList.add('error-message');
        error.textContent = '*Passwords do not match';
        errorContainer.appendChild(error);
    }
});