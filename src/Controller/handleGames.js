const gameModel = require('../models/gameState.js');
const userModel = require('../models/user.js');

async function addGame(req, res) {
    try {
        const user = await userModel.findOne({username: req.params.username});
        
        if (!user) {
            throw new Error("No username");
        }
        const {title, grid} = req.body;

        const game = new gameModel({
            userId: user._id,
            title, 
            grid
        });

        await game.save();
        res.status(201).json(game);

    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

async function loadGames(req, res) {
    try {
        const user = await userModel.findOne({username: req.params.username});

        if (!user) {
            throw new Error("No username");
        }

        const games = await gameModel.find({userId: user._id});

        res.status(200).json(games);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

module.exports = {addGame, loadGames}