const router = require('koa-router')();
const controller = require('../controller/c-center')

// 获取用户信息
router.post('/center/findUser', controller.findUser);

// 删除用户
router.post('/center/deleteUser', controller.deleteUser);

module.exports = router;