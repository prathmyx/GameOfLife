const mongoose = require('mongoose');

const gameStateSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    title: {
        type: String,
        required: true,
        default: 'Untitled Game',
    },
    grid: {
        type: [[Number]],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('GameState', gameStateSchema);