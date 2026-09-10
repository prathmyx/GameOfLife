const express = require('express');
const connectDB = require('./config/db.js');

const setCORS = require('./middlewares/cors.js');

const healthRouter = require('./Routes/healthRoute.js');
const usersRouter = require('./Routes/usersRoute.js');
const authRouter = require('./Routes/authRoute.js');

const app = express();

connectDB();

app.use(setCORS);

app.use('/api/v1/health', healthRouter);
app.use('/api/v1/users', usersRouter);
app.use('/auth', authRouter);

PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Listening at: http://localhost:${PORT}`);
})
