function setCORS(req, res, next) {
    const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://127.0.0.1:3000';
    res.setHeader('Access-Control-Allow-Origin', CLIENT_ORIGIN);

    next();
}

module.exports = setCORS;