import { SERVER_URL } from "./config.js";
import { Game } from './main.js';
import globalSaves from "./globalSave.js";
import mySaves from "./MySaves.js";

export function loadGlobalSaves() {
    render(globalSaves, document.getElementById('globalSaves'));
    console.log('Loading global saves...');
}

export function loadPersonalSaves() {
    handleLoad(document.getElementById('personalSaves'));
    console.log('Loading personal saves...');
}

async function handleLoad(container) {
    try {
        const response = await fetch(`${SERVER_URL}/api/v1/users/games`, {
            method: "GET",
            credentials: "include"
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error);
        }

        render(data, container);
        console.log('Loaded Succesfully', data);
    } catch (err) {
        console.log(err);
        render(mySaves, container);
    }
}

function render(data, container) { 
    const closeLoadBtn = document.getElementById('closeBtnLoad');
    container.innerHTML = ''; 

    data.forEach(element => { 
        const button = document.createElement('button'); 
        button.classList.add('save-item'); 
        button.textContent = element.title; 

        button.addEventListener('click', () => { 
            Game.board = element.grid; 
            Game.render();
            
            closeLoadBtn.click();
        }); 
        container.appendChild(button); 
    }); 
}