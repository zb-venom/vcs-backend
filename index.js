const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const appRoutes = require('./routes/app')

const PORT = process.env.PORT || 5000

const app = express();

app.use(appRoutes)

app.listen(PORT, () => {
    console.log(`\nСервер запущен: `.green + `http://localhost:${PORT}`.red)
})