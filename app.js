const express = require('express')


const app = express();

// Health check
app.get('/', (req, res) => res.json('OK'));

module.exports = app;
