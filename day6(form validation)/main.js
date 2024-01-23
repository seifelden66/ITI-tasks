const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phone = document.getElementById('phone');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList = 'form-control error';
    formControl.querySelector('small').innerText = message;
}

function showSuccess(input) {
    input.parentElement.classList = 'form-control success';
}

function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input.value.trim());
}

function validatePhone(input) {
    const re = /^(010|011|012|015)\d{8}$/;
    return re.test(input.value.trim());
}

function validateLength(input, min, max) {
    const length = input.value.length;
    return length >= min && length <= max;
}

function validateRequired(input) {
    return input.value.trim() !== '';
}

function handleBlur(input, validationFunction, errorMessage) {
    input.addEventListener('blur', () => {
        if (validationFunction(input)) {
            showSuccess(input);
        } else {
            showError(input, errorMessage);
        }
    });
}

handleBlur(username, validateRequired, 'Username is required');
handleBlur(email, validateEmail, 'Email is not valid');
handleBlur(password, () => validateLength(password, 6, 25), 'Password must be between 6 and 25 characters');
handleBlur(phone, validatePhone, 'Phone number is invalid');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputs = [username, email, password, phone];
    inputs.forEach((input) => {
        if (!validateRequired(input)) {
            showError(input, `${getFieldName(input)} is required`);
        }
    });

    if (!validateLength(username, 3, 15)) {
        showError(username, 'Username must be between 3 and 15 characters');
    }

    if (!validateLength(password, 6, 25)) {
        showError(password, 'Password must be between 6 and 25 characters');
    }

    if (!validateEmail(email)) {
        showError(email, 'Email is not valid');
    }

    if (!validatePhone(phone)) {
        showError(phone, 'Phone number is invalid');
    }
});

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
