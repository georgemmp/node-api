const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductControllers')

routes.get("/products", ProductController.getAll)
routes.get("/products/:id", ProductController.getById)
routes.post("/products", ProductController.insert)
routes.put("/products/:id", ProductController.update)
routes.delete("/products/:id", ProductController.destroy)

module.exports = routes
