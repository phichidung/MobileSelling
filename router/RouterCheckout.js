const Router = require('koa-router');
const CheckoutController = require('../controller/CheckoutController');

const router = new Router();
const checkoutController = new CheckoutController();

router.get('/checkout', checkoutController.checkout);
router.post('/checkout', checkoutController.sendBill);

router.post('/braintree-transaction', async(context) => {
    const nonce = context.request.body.paymentMethodNonce;

    await context.braintreeGateway.transaction.sale({
        amount: '10.00',
        paymentMethodNonce: nonce,
        options: {
            submitForSettlement: true
        }
    });
    return {
        payment: 'success'
    };
});

module.exports = router;
