var express = require('express');
var router = express.Router();



/* GET products */
router.get('/products', function(req, res, next) {
  res.json([
    {productName: 'urphone',
     productType: 'phone',
     productDesc: 'A great phone that will knock your socks off',
    productPrice: 15000},
    {productName: 'urphone plus',
    productType: 'phone',
     productDesc: 'A great phone that will knock your socks off again',
    productPrice: 15000},
    {productName: 'urphone case',
    productType: 'case',
    productDesc: 'A great phone case that will knock your socks off',
    productPrice: 1200},
    {productName: 'urphone case plus',
    productType: 'case',
    productDesc: 'A great phone case that will knock your socks off',
    productPrice: 1900},
  ]);
});

router.get('/phoneimage', function(req, res, next) {
  console.log(__dirname + '\\images/phone.png')
  res.sendFile(__dirname + `\\images\\phone.png`)
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/app/build/index.html'));
});

module.exports = router;
