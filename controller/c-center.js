const userModel = require('../lib/mysql.js')
const checkNotLogin = require('../middlewares/check.js').checkNotLogin
const checkLogin = require('../middlewares/check.js').checkLogin

exports.findUser = async ctx => {
    console.log(ctx.request.body)
    let { name } = ctx.request.body
    await userModel.findDataByName(name)
        .then(result => {
            let res = result
            if (res.length && name === res[0]['name']) {
                ctx.session = {
                    user: res[0]['name'],
                    id: res[0]['id'],
                }
                ctx.body = {
                    code: 200,
                    data: res[0],
                    message: '获取成功'
                }
            } else {
                ctx.body = {
                    code: 500,
                    message: '用户名错误'
                }
                console.log('用户名错误!')
            }
        }).catch(err => {
            console.log(err)
        })
}

exports.deleteUser = async ctx => {
    console.log(ctx.request.body)
    let { name } = ctx.request.body
    await userModel.deleteUserData(name)
        .then(result => {
            let res = result;
            console.log(res);
            if (res) {
                ctx.body = {
                    code: 200,
                    message: '删除成功'
                }
                console.log('删除成功')
            } else {
                ctx.body = {
                    code: 500,
                    message: '用户名不存在'
                }
                console.log('用户名不存在!')
            }
        }).catch(err => {
            console.log(err)
        })
}