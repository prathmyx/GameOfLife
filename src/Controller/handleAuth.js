const userModel = require('../models/user.js');

async function signUpUser(req, res) {
    try {
        const {username, password} = req.body;

        if (!username || !password) {
            return res.status(400).json({error: "Both username and password are necessary"});
        }

        const duplicate = await userModel.findOne({username});

        if (duplicate) {
            return res.status(400).json({error: "Username is already taken"});
        }

        const user = new userModel({username, password});
        await user.save();

        return res.status(201).json({success: "User Signed Up"});
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

async function loginUser(req, res) {
    try {
        const {username, password} = req.body;

        if (!username || !password) {
            return res.status(400).json({error: "Both username and password are necessary"});
        }
        
        const duplicate = await userModel.findOne({username, password});

        if (!duplicate) {
            return res.status(400).json({error: "Username or Password is incorrect"});
        }

        return res.status(200).json({success: "User Logged in"});
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

module.exports = {signUpUser, loginUser};

