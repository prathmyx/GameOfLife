import { SERVER_URL } from "./config.js";

export async function handleLoad() {
    try {
        let username = 'abc';
        const response = await fetch(`${SERVER_URL}/api/v1/users/${username}/games`);

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error);
        }

        console.log('Loaded Succesfully', data);
    } catch (err) {
        console.log(err);
        statusEl.textContent = err.message;
    }
}