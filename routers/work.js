const router = require('koa-router')();
const controller = require('../controller/c-work')

// 获取主题
router.post('/work/gettheme', controller.gettheme);

// 获取内置分类
router.post('/work/getinnerclass', controller.getinnerclass);

// 获取自定义配件
router.post('/work/getdiyclass', controller.getdiyclass);

module.exports = router;