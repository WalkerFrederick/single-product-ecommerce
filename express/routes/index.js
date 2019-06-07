var express = require('express');
var router = express.Router();

/* GET products */
router.get('/products', function(req, res, next) {
  res.json([
    {productName: 'urphone',
     productDesc: 'A great phone that will knock your socks off',
    productPrice: 150},
    {productName: 'urphone plus',
     productDesc: 'A great phone that will knock your socks off again',
    productPrice: 150},
    {productName: 'urphone case',
     productDesc: 'A great phone case that will knock your socks off',
    productPrice: 150},
  ]);
});

module.exports = router;
