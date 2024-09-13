const Product = require("../models/product.model.js");

const getApiProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

const getApiProductId = async (req, res) => {
    try {
        const {id} = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(product);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id, req.body);
        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(product);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports = {getApiProduct, getApiProductId, createProduct, updateProduct, deleteProduct}