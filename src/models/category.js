const mongoose = require('mongoose');
const categorySchema = require('../database/schemas/category');
const dpHelper = require('./dbHelper');
const Category = mongoose.model('category', categorySchema);

async function createCategory(category) {
    let query = () => {
        return new Category(category).save();
    }

    return dpHelper.execute(query);
}

async function findCategories() {
    let query = () => {
        return Category.find().exec();
    }

    return dpHelper.execute(query);
}

module.exports = {
    createCategory,
    findCategories
}