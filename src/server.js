const express = require('express');
const connectDB = require('./config/db.js');

const app = express();

connectDB();

PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    `Server Listening at: http://localhost:${PORT}`;
})
