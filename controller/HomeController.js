class HomeController {

    async getHome(ctx, next) {
        let categories = await ctx.categoryRepository.getAll();
        let products   = await ctx.productRepository.getAll();
        ctx.render('indexHome.html', {categories, products, auth: ctx.session.username});
    }

    async singout(ctx, next) {
        ctx.session.username = null;
        ctx.session.password = null;

        ctx.redirect('/singin');
    }
}

module.exports = HomeController;
