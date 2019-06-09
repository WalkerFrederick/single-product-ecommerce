var express = require('express');
var router = express.Router();

router.use(require("body-parser").text());
const stripe = require('stripe')('sk_test_ztTRYE96UPog2gk1K5bSVRvy00j76UOpNW');


router.get('/success', function(req, res, next) {
    res.send("checkout complete")
  });
router.get('/cancel', function(req, res, next) {
    res.send("checkout canceled")
  });
router.post("/", async (req, res) => {
    try {
        let data = JSON.parse(req.body)
        let {status} = await stripe.charges.create({
        amount: data.product.productPrice,
        currency: "usd",
        description: "An example charge",
        source: data.token
        });


        res.json({status});
    } catch (err) {
        res.status(500).end();
    }
});
module.exports = router;
