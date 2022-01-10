const {Schema} = require('mongoose');

const category = new Schema({
    name: {
        type: String,
    },
})

module.exports = category;
