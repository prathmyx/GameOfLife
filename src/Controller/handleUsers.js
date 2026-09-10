const userModel = require('../models/user.js');

async function addUser(req, res) {
    try {
        const {username, password} = req.body;
        const user = new userModel({username, password});

        await user.save();
        res.status(201).json(user);

    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

async function getUsers(req, res) {
    try {
        const users = await userModel.find({});

        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

module.exports = {addUser, getUsers};
