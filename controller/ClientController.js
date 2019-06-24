const twofactorEmail = require('../2fa/2faMail');

class ClientController {

    async singUp(ctx, next) {
        ctx.render('singup.html');
    }

    async postSingUp(ctx, next) {
        let secret = await ctx.speakeasy.totpSecret();
        let data = {
            name    : ctx.request.body.name,
            username: ctx.request.body.username,
            password: ctx.request.body.password,
            phone   : ctx.request.body.phone,
            gender  : ctx.request.body.gender,
            age     : ctx.request.body.age,
            email   : ctx.request.body.email,
            address : ctx.request.body.address,
            secret  : secret
        };

        await ctx.clientRepository.add(data);

        let userPass = await ctx.clientRepository.findByUsernamePassword(ctx.request.body.username, ctx.request.body.password);

        if(userPass){
            ctx.session.username = ctx.request.body.username;
            ctx.session.password = ctx.request.body.password;

            ctx.redirect('home');
        }else {
            ctx.redirect('singin');
        }
    }

    async singIn(ctx, next) {
        ctx.render('singin.html')
    }

    async postSingIn(ctx, next) {
        let username = ctx.request.body.username;
        let password = ctx.request.body.password;

        let userPass = await ctx.clientRepository.findByUsernamePassword(username, password);

        if(userPass){
            ctx.session.username = username;
            ctx.session.password = password;

            let client = await ctx.clientRepository.findByUsername(username);
            let token  = await ctx.speakeasy.totpGenerate(client.secret);
            await ctx.mailer.send(new twofactorEmail(client.email, token));

            ctx.redirect('twofactor');
        }else {
            ctx.redirect('singin');
        }
    }

    async validCode(ctx, next) {
        ctx.render('twofactor.html');
    }

    async postvalidCode(ctx, next) {
        let username = ctx.session.username;
        let client   = await ctx.clientRepository.findByUsername(username);
        let secret   = client.secret;
        let token    = ctx.request.body.token;
        let valid    = await ctx.speakeasy.totpValidate(secret, token);

        if(valid == true) {
            ctx.redirect('home');
        }else {
            ctx.redirect('twofactor');
        }
    }
}

module.exports = ClientController;
