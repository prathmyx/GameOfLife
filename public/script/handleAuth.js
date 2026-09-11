import { SERVER_URL } from "./config.js";

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

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
        
        console.log(data);
        if (!response.ok) {
            throw new Error(data.message);
        }

        console.log('Authentication Succesfull');
    } catch (err) {
        console.log(err.message);
    }
}

function handleSign() {

}

