class CartController {
    async addCart(ctx, next) {
        if (ctx.session.idsp) {
            ctx.session.idsp.push(parseInt(ctx.query.id));
        } else {
            ctx.session.idsp = [parseInt(ctx.query.id)];
        }

        ctx.redirect('/cart');
    }

    async cart(ctx, next) {
        const result = await ctx.braintreeGateway.clientToken.generate();
        if(ctx.session.idsp) {
            if(ctx.session.idsp.length == 0) {
                let text = 'Giỏ Hàng Trống !';
                ctx.render('cart.html', {text});
            } else {
                let cart           = ctx.session.idsp;
                let groupByProduct = await ctx.productRepository.findProductGroupBy(cart);
                ctx.render('cart.html', { groupByProduct, braintreeToken: result.clientToken });
            }
        }else {
            let text = 'Giỏ Hàng Trống !';
            ctx.render('cart.html', {text});
        }
    }

    async removeCart(ctx, next) {
        var object = ctx.session.idsp;
        for (var x in object) {
            let data = object[x];
            let idsp = ctx.query.idsp;
            if(data == idsp) {
                object.shift(parseInt(idsp));
                break;
            }
        }
        ctx.redirect('/cart');
    }
}
module.exports = CartController;
