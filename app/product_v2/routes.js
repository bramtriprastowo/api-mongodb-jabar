const router = require('express').Router();
const productControllerv2 = require('./controller');

router
  .get('/product', productControllerv2.getAllProductsWithQuery)
  .get('/product/:id', productControllerv2.getDetailProduct)
  .post('/product', productControllerv2.insertProduct)
  .put('/product/:id', productControllerv2.updateProduct)
  .delete('/product/:id', productControllerv2.deleteProduct);

module.exports = router;
