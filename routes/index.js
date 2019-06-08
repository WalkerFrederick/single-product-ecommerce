var express = require('express');
var router = express.Router();

/* GET products */
router.get('/products', function(req, res, next) {
  res.json([
    {productName: 'urphone',
     productType: 'phone',
     productDesc: 'A great phone that will knock your socks off',
    productPrice: 150},
    {productName: 'urphone plus',
    productType: 'phone',
     productDesc: 'A great phone that will knock your socks off again',
    productPrice: 150},
    {productName: 'urphone case',
    productType: 'case',
    productDesc: 'A great phone case that will knock your socks off',
    productPrice: 12},
    {productName: 'urphone case plus',
    productType: 'case',
    productDesc: 'A great phone case that will knock your socks off',
    productPrice: 19},
  ]);
});

router.get('/phoneimage', function(req, res, next) {
  console.log(__dirname + '\\images/phone.png')
  res.sendFile(__dirname + `\\images\\phone.png`)
});

module.exports = router;
