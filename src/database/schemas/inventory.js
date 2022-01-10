const {Schema} = require('mongoose');

const inventorySchema = new Schema({
    name: {
        type: String,
    },
    created_at: {
        type: Date,
        required: [true, 'Created date is required']
    },
    tags: [{
        type: String
    }],
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'category'
    }],
    stock: {
        type: Number
    },
    image_url: {
        type: String
    }
})

module.exports = inventorySchema;