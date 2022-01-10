const inventoryModel = require('../models/inventory');

function index(req, res) {
    res.render('index');
}

async function updateInventory(req, res) {
    let inventory = await inventoryModel.findInventoryWithObjectId(req.params.id);

    res.render('updateInventoryForm', {
        _id: inventory._id,
        name: inventory.name,
        stock: inventory.stock,
        categories: inventory.categories
    })
}

module.exports = (app) => {
    app.get('/', index);
    app.get('/updateInventoryForm/:id', updateInventory);
}