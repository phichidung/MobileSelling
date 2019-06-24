const Router           = require('koa-router');
const ClientController = require('../controller/ClientController');

const router           = new Router();
const clientController = new ClientController();

router.get('/singin', clientController.singIn);
router.post('/singin', clientController.postSingIn);

module.exports = router;