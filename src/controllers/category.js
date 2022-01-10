const categoryModel = require('../models/category');

async function createCategory(req, res) {
    let name = req.body.name;

    let result = await categoryModel.createCategory({
        name: name
    });

    res.send(result);
}

async function findCategories(req, res) {
    let result = await categoryModel.findCategories();

    res.send(result);
}

module.exports = (app) => {
    app.post('/categories', createCategory);
    app.get('/categories', findCategories);
}
