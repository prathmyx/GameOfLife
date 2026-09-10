const express = require('express');
const mongoose = require('mongoose');

const app = expess();

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    `Server Listening at: http://localhost:${PORT}`;
})
