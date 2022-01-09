const express = require('express');

const app = express();

const hello = (req, res) => res.send({hello: 'world'});

app.get('/', hello);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    const addr = server.address();
    console.log(`Server listening at http://${addr.address}:${addr.port}`)
});