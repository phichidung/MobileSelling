const Router = require('koa-router');
const CheckoutController = require('../controller/CheckoutController');

const router = new Router();
const checkoutController = new CheckoutController();

router.get('/checkout', checkoutController.checkout);
router.post('/checkout', checkoutController.sendBill);

router.post('/braintree-transaction', async(req, res, context) => {
    const nonce = context.request.body.paymentMethodNonce;
    console.log('geting nonce');
    await context.braintreeGateway.transaction.sale({
        amount: '10.00',
        paymentMethodNonce: nonce,
        options: {
            submitForSettlement: true
        }
    }, function(error, result) {
        if(result) {
            res.send(result);
        }else {
            res.status(500).send(error);
        }
    });

    return {
        payment: 'success'
    };
});

module.exports = router;
