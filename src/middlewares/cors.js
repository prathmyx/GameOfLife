function setCORS(req, res, next) {
    const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://127.0.0.1:3000';
    const origins = [CLIENT_ORIGIN, 'https://prathmyx.github.io'];

    res.setHeader('Access-Control-Allow-Origin', origins);

    next();
}

module.exports = setCORS;