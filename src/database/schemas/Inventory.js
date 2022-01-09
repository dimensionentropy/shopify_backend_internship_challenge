const {Schema} = require('mongoose');

const inventorySchema = new Schema({
    title: {
        type: String,
    },
    created_at: {
        type: Date,
        required: [true, 'Created date is required']
    },
    stock: {
        type: Number
    },
    image_url: {
        type: String
    }
})

module.exports = inventorySchema;