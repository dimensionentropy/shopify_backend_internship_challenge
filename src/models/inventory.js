const mongoose = require('mongoose');
const inventorySchema = require('../database/schemas/Inventory');
const dpHelper = require('./dbHelper');
const Inventory = mongoose.model('inventory', inventorySchema);

async function createInventory(inventory) {
    let query = () => {
        return new Inventory(inventory).save();
    }

    return dpHelper.execute(query);
}

async function findInventories() {
    let query = () => {
        return Inventory.find().exec();
    }

    return dpHelper.execute(query);
}

module.exports = {
    createInventory,
    findInventories
}