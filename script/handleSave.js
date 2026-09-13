import { SERVER_URL } from "./config.js";
import { Game } from "./main.js";
import mySaves from "./MySaves.js";

export async function handleSave(e) {
    e.preventDefault();
    const statusEl = document.getElementById('save-status');
    const title = document.getElementById('saveForm').elements['title'];

    try {
        const response = await fetch(`${SERVER_URL}/api/v1/users/games`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                title: title.value,
                grid: Game.board,
            })
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error);
        }
        
        statusEl.textContent = 'Saved!';
        console.log('Saved Succesfully');
    } catch (err) {
        console.log(err);
        mySaves.push({
            title: title.value,
            grid: Game.board
        });
        statusEl.textContent = "Saved Locally";
    }
}