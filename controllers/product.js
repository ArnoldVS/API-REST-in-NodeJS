'use strict'

const Product = require('../models/product')

// Mostrar producto por ID
function getProduct(req, res) {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}` })
        if (!product) return res.status(404).send({ message: `El producto no existe` })

        res.status(200).send({ product })
    })
}
// Mostrar todos los productos
function getProducts(req, res) {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}` })
        if (!products) return res.status(404).send({ message: `El producto no existe` })

        res.status(500).send({ products })
    })
}
//Crear producto
function saveProduct(req, res) {
    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) => {
        if (err) res.status(500).send({ message: `Error al guardar en la base de datos: ${err}` })

        res.status(200).send({ product: productStored })
    })
}

// Actualizar producto
function updateProduct(req, res) {
    let productId = req.params.productId
    let update = req.body

    Product.findByIdAndUpdate(productId, update, (err, productUpdate) => {
        if (err) res.status(500).send({ message: `Error al actualizar el producto: ${err}` })

        res.status(200).send({ product: productUpdate })
    })
}
// borrar producto
function deleteProduct(req, res) {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) res.status(500).send({ message: `Error al borrar el producto: ${err}` })

        product.remove((err, productId) => {
            if (err) res.status(500).send({ mesage: `Error al borrar el producto: ${err}` })
            res.status(200).send({ message: 'EL producto ha sido eliminado' })
        })
    })
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}