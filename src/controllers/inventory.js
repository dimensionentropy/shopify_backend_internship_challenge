const inventoryModel = require('../models/inventory');

async function createInventory(req, res) {
    let result = await inventoryModel.createInventory({
        title: 'test',
        created_at: new Date().getTime(),
        stock: 0,
        image_url: "https://365thingsinhouston.com/wp-content/uploads/2016/07/5-must-do-things-in-rice-university-houston-2016.jpg"
    });

    res.send(result);
}

async function findInventories(req, res) {
    let result = await inventoryModel.findInventories();

    res.send(result);
}

module.exports = (app) => {
    app.post('/inventories', createInventory);
    app.get('/inventories', findInventories);
}
