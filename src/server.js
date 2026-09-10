const express = require('express');
const connectDB = require('./config/db.js');

const healthRouter = require('./Routes/healthRoute.js');

const app = express();

connectDB();

app.use('/api/v1/health', healthRouter);

PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    `Server Listening at: http://localhost:${PORT}`;
})
