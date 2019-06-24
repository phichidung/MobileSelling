const Router           = require('koa-router');
const ClientController = require('../controller/ClientController');

const router           = new Router();
const clientController = new ClientController();

router.get('/singup', clientController.singUp);
router.post('/singup', clientController.postSingUp);

module.exports = router;