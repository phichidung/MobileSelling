const Router = require('koa-router');
const CheckoutController = require('../controller/CheckoutController');

const router = new Router();
const checkoutController = new CheckoutController();

router.post('/braintree-transaction', async(context) => {
    const nonce = context.request.body.paymentMethodNonce;
    let cart       = context.session.idsp;
    let total      = await context.productRepository.findPriceProductGroupBy(cart);
    let usd        = 23000;
    let totalPrice = 0;
    for(let i = 0; i < total.length; i++) {
        totalPrice += total[i].price;
    }

    let USD        = Math.round(totalPrice/usd);
    let usdString  = String(USD)+'.00';

    await context.braintreeGateway.transaction.sale({
        amount: usdString,
        paymentMethodNonce: nonce,
        options: {
            submitForSettlement: true
        },
    }, function(error, result) {
        if(result) {
            context.status = 200;
            context.body = {
                message: "success"
            }
        }else {
            context.status = 400;
            context.body = {
                message: "error"
            }
        }
    });
});

router.get('/checkout', checkoutController.checkout);
router.post('/checkout', checkoutController.sendBill);

module.exports = router;


