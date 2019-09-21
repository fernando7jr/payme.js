const express = require('express')


const app = express();
const port = process.env.PORT || 8080;
const isProd = process.env.NODE_ENV === "prod";
const envMode = isProd ? "production" : "development";

// Health check
app.get('/', (req, res) => res.send('OK'));

app.listen(port, function () {
    console.log(`Running on port ${port} in ${envMode} mode.`);
});
