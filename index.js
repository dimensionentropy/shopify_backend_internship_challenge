const express = require('express');
const bodyParser = require('body-parser');
const inventory = require('./src/controllers/inventory');
const category = require('./src/controllers/category');
const frontend = require('./src/controllers/frontend')

const app = express();

app.set('views', './src/views');
app.set('view engine', 'pug');
frontend(app);
app.use(bodyParser.json());
inventory(app);
category(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    const addr = server.address();
    console.log(`Server listening at http://${addr.address}:${addr.port}`)
});