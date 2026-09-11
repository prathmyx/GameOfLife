import { SERVER_URL } from "./config.js";
import { Game } from './main.js';

export function loadGlobalSaves() {
    handleLoad(document.getElementById('globalSaves'));
    console.log('Loading global saves...');
}

export function loadPersonalSaves() {
    handleLoad(document.getElementById('personalSaves'));
    console.log('Loading personal saves...');
}

async function handleLoad(container) {
    try {
        let username = 'abc';
        const response = await fetch(`${SERVER_URL}/api/v1/users/${username}/games`);

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error);
        }

        render(data, container);
        console.log('Loaded Succesfully', data);
    } catch (err) {
        console.log(err);
    }
}

function render(data, container) { 
    container.innerHTML = ''; 
    data.forEach(element => { 
        const button = document.createElement('button'); 
        button.classList.add('save-item'); 
        button.textContent = element.title; 

        button.addEventListener('click', () => { 
            Game.board = element.grid; 
            Game.render();
        }); 
        container.appendChild(button); 
    }); 
}