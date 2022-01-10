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
        let newInventory = new Inventory(inventory);
        newInventory.save();

        return newInventory.populate('categories');
    }

    return dbHelper.execute(query);
}

async function findInventories() {
    let query = () => {
        return Inventory
            .find()
            .populate('categories')
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

    return inventory.populate('categories');
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