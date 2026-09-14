# GameOfLife 🧬👾
Implementation of John Conway's Game of Life

A full-stack implementation of **Conway's Game of Life**, featuring an interactive frontend, user authentication, game saving and loading, and globally accessible game configurations. The application supports both cloud-based persistence and local storage when the backend is unavailable.

## Features

* **Interactive Game of Life** — Simulate Conway's cellular automaton with an interactive game board.
* **User Authentication** — Secure login, signup, and logout functionality.
* **Save & Load Games** — Save your game configurations and load them whenever you want.
* **Global Games** — Access game configurations shared globally by other users.
* **Offline Support** — Automatically saves game data locally when the backend server is unavailable.
* **Full-Stack Architecture** — Express.js backend with MongoDB persistence and a frontend hosted separately.
* **Cross-Origin Communication** — Frontend and backend are deployed independently and configured to communicate across different origins.

## Tech Stack

### Frontend

* JavaScript
* HTML & CSS
* GitHub Pages

### Backend

* Node.js
* Express.js
* Mongoose
* MongoDB
* Render

## Project Architecture

```text
Game-Of-Life/
├── public/
│   ├── index.html
│   └── scripts
│       ├── main.js
│       └── ...
│
└── src/
    ├── server.js
    └── ...
```

The frontend communicates with the Express.js backend through API requests. The backend uses Mongoose to interact with MongoDB for persistent game and user data.

## Deployment

| Component | Platform     |
| --------- | ------------ |
| Frontend  | GitHub Pages |
| Backend   | Render       |
| Database  | MongoDB Atlas|

The frontend and backend are deployed separately, with cross-origin communication enabled to allow the frontend to interact with the hosted API.

## Getting Started

### Prerequisites

* Node.js and npm
* MongoDB database
* Git

### Installation

1. Clone the repository:

   ```bash
   git clone <https://github.io>
   ```

2. Navigate to the project directory:

   ```bash
   cd GameOfLife
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Configure your environment variables as required by the backend.

5. Start the development server:

   ```bash
   npm run dev
   ```

## How It Works

Conway's Game of Life is a cellular automaton in which each cell on a grid evolves according to a set of rules based on its neighboring cells.

The application allows users to:

1. Create and interact with Game of Life patterns.
2. Sign up or log in to their account.
3. Save game configurations for later use.
4. Load previously saved games.
5. Explore globally available game configurations.
6. Continue working with local game data when the backend is unavailable.

## Offline Support

When the backend server cannot be reached, the application stores game data locally. This allows users to continue using the game without an active server connection.

## Future Improvements

* Add more predefined Game of Life patterns.
* Introduce additional simulation controls.
* Improve synchronization between local and server-side data.
* Add more visualization and customization options.

## License

This project is open source and available under the [MIT License](LICENSE).
