const mongoose = require('mongoose')

const Product = new mongoose.model('Product')

async function getAll(req, res) {
    const {page = 1} = req.query
    const products = await Product.paginate({}, {page, limit: 10})

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