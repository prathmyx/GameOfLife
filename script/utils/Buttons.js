import { getNextBoard, render, initBoard } from "../board.js"
import { Game } from "../main.js";
import { handleLoad } from "../handleLoad.js";
import { handleSave } from "../handleSave.js";

//Next Button
const nextButton = document.getElementById('next-btn');
nextButton.addEventListener('click', () => {
    next();
});
export function next() {
    Game.board = getNextBoard();
    render();
}

//Start Button
const startButton = document.getElementById('start-btn');
let intervalId = null;

startButton.addEventListener('click', () => {
    if (intervalId == null) {
        intervalId = setInterval(next, 1000);
        startButton.textContent = 'Stop';
    } else {
        clearInterval(intervalId);
        intervalId = null;
        startButton.textContent = 'Start';
    }
});

//Reset Button
const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', () => {
    Game.board = initBoard();
    render();
})

//Auth Setup
const modal = document.getElementById("authModal");

const loginContainer = document.getElementById("loginFormContainer");
const signupContainer = document.getElementById("signupFormContainer");

const authBtn = document.getElementById("authBtn");
const closeBtn = document.getElementById("closeBtn");

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

modal.addEventListener("click", () => {
    const statusEl = document.getElementById('auth-status');

    statusEl.textContent = "";
    statusEl.className = "";

    document.querySelectorAll("input.error").forEach(input => {
        input.classList.remove("error");
    });
});

authBtn.addEventListener("click", () => {
    if (intervalId != null) startButton.click();
    modal.classList.add("active");
    showLoginForm();
});


closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});


showSignup.addEventListener("click", () => {
    showSignupForm();
});


showLogin.addEventListener("click", () => {
    showLoginForm();
});


function showLoginForm() {
    loginForm.reset();
    loginContainer.style.display = "block";
    signupContainer.style.display = "none";
}


function showSignupForm() {
    signupForm.reset();
    loginContainer.style.display = "none";
    signupContainer.style.display = "block";
}


// Load Button 
const loadButton = document.getElementById('load-btn');
loadButton.addEventListener('click', handleLoad);

//Save Button
const saveButton = document.getElementById('save-btn');
saveButton.addEventListener('click', handleSave);