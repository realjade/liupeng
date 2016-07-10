/**
 * Created by zyy on 15/7/7.
 * zhangyuyu@superjia.com
 */
var Router = require('koa-router');
const router = new Router({});

router.get('/telltale', function*(next) {
  yield this.render('telltale',Object.assign({title:'telltale'}, this.locals));

});

module.exports = router;
