import { SERVER_URL } from "./config.js";
import { Game } from "./main.js";

export async function handleSave(e) {
    e.preventDefault();
    const statusEl = document.getElementById('save-status');
    const title = document.getElementById('saveForm').elements['title'];

    try {
        let username = 'abc';
        const response = await fetch(`${SERVER_URL}/api/v1/users/${username}/games`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
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
        statusEl.textContent = err.message;
    }
}