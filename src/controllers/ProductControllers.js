const mongoose = require('mongoose')

const Product = new mongoose.model('Product')

async function getAll(req, res) {
    const products = await Product.find({})

    return res.json(products)
}

async function getById(req, res) {
    const product = await Product.findById(req.params.id)

    return res.json(product)
}

async function insert(req, res) {
    const product = await Product.create(req.body)

    return res.json(product)
}

async function update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})

    return res.json(product)
}

async function destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id)

    return res.send()
}

module.exports = {
    getAll,
    insert,
    getById,
    update,
    destroy
}