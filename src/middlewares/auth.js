const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({
                error: "Authentication required"
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (err) {
        return res.status(401).json({
            error: err.message
        });
    }
}

module.exports = verifyToken;