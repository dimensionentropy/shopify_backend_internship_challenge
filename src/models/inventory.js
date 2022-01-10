const mongoose = require('mongoose');
const inventorySchema = require('../database/schemas/inventory');
const dbHelper = require('./dbHelper');
const Inventory = mongoose.model('inventory', inventorySchema);

async function findInventoryWithObjectId(objectId) {
    let query = () => {
        return Inventory.findOne({_id: objectId}).exec();
    }

    return dbHelper.execute(query);
}

async function createInventory(inventory) {
    let query = () => {
        return new Inventory(inventory).save();
    }

    return dbHelper.execute(query);
}

async function findInventories() {
    let query = () => {
        return Inventory
            .find()
            .populate('category_ids')
            .exec();
    }

    return dbHelper.execute(query);
}

async function updateInventory(inventoryId, updateInfo) {
    let inventory = await findInventoryWithObjectId(inventoryId);

    for (let attr in updateInfo) {
        inventory[attr] = updateInfo[attr];
    }
    inventory.save();

    return inventory.populate('category_ids');
}

async function deleteInventory(inventoryId) {
    let query = () => {
        return Inventory.deleteOne({_id: inventoryId});
    }
    return dbHelper.execute(query);
}

module.exports = {
    createInventory,
    findInventories,
    updateInventory,
    deleteInventory
}