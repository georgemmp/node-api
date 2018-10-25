const mongoose = require('mongoose')

const Product = new mongoose.model('Product')

async function index(req, res) {
    const products = await Product.find({})

    return res.json(products)
}

async function store(req, res) {
    const products = await Product.create(req.body)

    return res.json(products)
}

module.exports = {
    index,
    store
}