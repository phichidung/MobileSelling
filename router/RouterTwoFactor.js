const Router           = require('koa-router');
const ClientController = require('../controller/ClientController');

const router           = new Router();
const clientController = new ClientController();

router.get('/twofactor', clientController.validCode);
router.post('/twofactor', clientController.postvalidCode);

module.exports = router;