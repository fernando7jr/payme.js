const express = require('express')


const app = express();

// Health check
app.get('/', (req, res) => res.send('OK'));

module.exports = app;
