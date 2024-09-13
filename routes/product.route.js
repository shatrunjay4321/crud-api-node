const express = require("express");
const {getApiProduct, getApiProductId, createProduct, updateProduct, deleteProduct} = require("../controllers/product.controller.js")
const router = express.Router();

router.get('/', getApiProduct);
router.get('/:id', getApiProductId);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;