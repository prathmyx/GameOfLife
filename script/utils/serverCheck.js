import { SERVER_URL } from "../config.js";

async function isLive() {
    try {
        const res = await fetch(`${SERVER_URL}/api/v1/health`);

        if (res.ok) {
            console.log("Connected To Server");
            return true;
        }
    } catch (err) {
        console.log("Couldn't Connect To Server:", err.message);
        return false;
    }
}

function getPath(status) {
    if (status) return './assets/cloud-tick.png';
    return './assets/cloud-cross.png';
}

export async function setState() {
    const serverStatus = document.getElementById('server-message');
    serverStatus.textContent = 'Checking...';
    let status = await isLive();

    if (status) {
        serverStatus.textContent = 'Connected';
    } else {
        serverStatus.textContent = 'Server Offline';
    }

    const serverImage = document.getElementById('server-image');
    serverImage.src = getPath(status);
}