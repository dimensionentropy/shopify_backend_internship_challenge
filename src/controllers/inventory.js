const inventoryModel = require('../models/inventory');

async function createInventory(req, res) {
    let inventoryBody = res.body;
    inventoryBody.created_at = new Date().getTime();

    let result = await inventoryModel.createInventory(inventoryBody);

    res.send(result);
}

async function findInventories(req, res) {
    let result = await inventoryModel.findInventories();

    res.send(result);
}

async function updateInventory(req, res) {
    let updateInfo = req.body;
    let inventoryId = req.params.id;

    let result = await inventoryModel.updateInventory(inventoryId, updateInfo);

    res.send(result);
}

async function deleteInventory(req, res) {
    let inventoryId = req.params.id;

    let result = await inventoryModel.deleteInventory(inventoryId);

    res.send(result);
}



module.exports = (app) => {
    app.post('/inventories', createInventory);
    app.get('/inventories', findInventories);
    app.patch('/inventories/:id', updateInventory);
    app.delete('/inventories/:id', deleteInventory);
}
