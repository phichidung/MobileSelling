const Router = require('koa-router');
const HomeController = require('../controller/HomeController');

const router = new Router();
const homeController = new HomeController();

router.get('/home', homeController.getHome);
router.get('/singout', homeController.singout);

module.exports = router;