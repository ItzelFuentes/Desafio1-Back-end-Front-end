var express = require('express');
var router = express.Router();
const productControllers = require('../controllers/productControllers')
let Product = require('../models/product');

router
  .route('/')
  .get(productControllers.getAllProducts) 
  .post(productControllers.createNewProduct)
  .patch(productControllers.updateProduct)
  .delete(productControllers.deleteProduct)
 
module.exports = router;
