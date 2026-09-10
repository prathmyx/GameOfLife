function setCORS(req, res, next) {
    const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://127.0.0.1:3000';
    const allowedOrigins = [CLIENT_ORIGIN, 'https://prathmyx.github.io'];

    if (allowedOrigins.includes(req.headers.origin)) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    }

    res.setHeader("Vary", "Origin");
    next();
}

module.exports = setCORS;