const app = require('./app');


const port = process.env.PORT || 8080;
const isProd = process.env.NODE_ENV === "prod";
const envMode = isProd ? "production" : "development";

app.listen(port, function () {
    console.log(`Running on port ${port} in ${envMode} mode.`);
});
