import { SERVER_URL } from "./config.js";

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

const statusEl = document.getElementById('auth-status');

export function handleAuthClick() {
    loginForm.addEventListener('submit', handleLogin);
    signupForm.addEventListener('submit', handleSign);
}

function setLoading(form) {
    statusEl.textContent = "Please wait...";
    statusEl.className = "loading";

    const button = form.querySelector('button[type="submit"]');

    if (button) {
        button.disabled = true;
        button.classList.add("loading");
        button.dataset.originalText = button.textContent;
        button.textContent = "Loading...";
    }
}

function clearLoading(form) {
    const button = form.querySelector('button[type="submit"]');

    if (button) {
        button.disabled = false;
        button.classList.remove("loading");

        if (button.dataset.originalText) {
            button.textContent = button.dataset.originalText;
        }
    }
}

function showError(form, message, fields = []) {

    statusEl.textContent = message;
    statusEl.className = "error";

    fields.forEach(fieldName => {
        const field = form.elements[fieldName];

        if (field) {
            field.classList.add("error");
        }
    });
}

async function handleLogin(e) {
    e.preventDefault();

    const username = loginForm.elements["username"];
    const password = loginForm.elements["password"];

    setLoading(loginForm);

    try {
        const response = await fetch(`${SERVER_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Login failed");
        }

        statusEl.textContent = "Login successful!";
        statusEl.className = "success";

        console.log('Authentication Successful');

    } catch (err) {
        console.log(err);

        showError(
            loginForm,
            err.message,
            ["username", "password"]
        );

    } finally {
        clearLoading(loginForm);
    }
}

async function handleSign(e) {
    e.preventDefault();

    const username = signupForm.elements["username"];
    const password = signupForm.elements["password"];
    const cpassword = signupForm.elements["cpassword"];

    if (password.value !== cpassword.value) {
        showError(
            signupForm,
            "Password and Confirm Password are not same!",
            ["password", "cpassword"]
        );

        return;
    }

    setLoading(signupForm);

    try {
        const response = await fetch(`${SERVER_URL}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Signup failed");
        }

        statusEl.textContent = "Signup successful!";
        statusEl.className = "success";

        console.log('Authentication Successful');

    } catch (err) {
        console.log(err);

        showError(
            signupForm,
            err.message,
            ["username", "password", "cpassword"]
        );

    } finally {
        clearLoading(signupForm);
    }
}