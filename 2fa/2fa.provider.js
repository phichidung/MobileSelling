const TwoFactor    = require('./2fa');

module.exports = (config) => {
    return async (ctx, next) => {
        ctx.speakeasy = new TwoFactor(config);
        await next();
    }
};
