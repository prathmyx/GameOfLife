import { SERVER_URL } from "./config.js";

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

const statusEl = document.getElementById('auth-status');

export function handleAuthClick() {
    loginForm.addEventListener('submit', handleLogin);
    signupForm.addEventListener('submit', handleSign);
}

async function handleLogin(e) {
    e.preventDefault();
    try {
        const username = loginForm.elements["username"].value;
        const password = loginForm.elements["password"].value;

        const response = await fetch(`${SERVER_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error);
        }

        console.log('Authentication Succesfull');
    } catch (err) {
        console.log(err);
        statusEl.textContent = err.message;
    }
}

async function handleSign(e) {
    e.preventDefault();
    try {
        const username = signupForm.elements["username"].value;
        const password = signupForm.elements["password"].value;
        const cpassword = signupForm.elements["cpassword"].value;

        if (password != cpassword) {
            throw new Error("Password and Confirm Password are not same!");
        }

        const response = await fetch(`${SERVER_URL}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error);
        }

        console.log('Authentication Succesfull');
    } catch (err) {
        console.log(err);
        statusEl.textContent = err.message;
    }
}

