const mongoose = require('mongoose');

async function connectDB() {
    try {
        console.log(process.env.MONGO_URI);
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(`Error Connecting: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;