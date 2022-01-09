const mongoose = require('mongoose');
require('dotenv').config();
const connectionString = process.env.MONGODB_URL;

async function execute(query) {
    const connector = mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

    let result = await connector.then(query);

    return result;
}

module.exports = {
    execute
}