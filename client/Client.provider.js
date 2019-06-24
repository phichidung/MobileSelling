const ClientRepository = require('./ClientRepository');

module.exports = (databaseConnect) => {
    return async (ctx, next) => {
        let clientRepository = new ClientRepository(databaseConnect);
        ctx.clientRepository = clientRepository;
        await next();
    }
}
