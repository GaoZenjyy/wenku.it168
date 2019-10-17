
// 添加老师
router.post(`/${apiName}`, (req, res)=>{
    /*********** 接口数据并验证 */
    let username = req.body.username || ''
    let password = req.body.password || ''
    if(username.length < 2 || username.length > 8) {
        res.json({
            "code": 400,
            "error":"用户名必须2~8位"
        })
        // 退出程序
        return
    }
    if(password.length < 6 || password.length > 18) {
        res.json({
            "code": 400,
            "error":"密码必须 6~18 位"
        })
        // 退出程序
        return
    }
    /*********** 插入到数据库中 */
    let sql = 'INSERT INTO st_teachers SET ?'
    let data = {
        username,   // 相当于：username: username
        password: md5(password + md5_key)    // 把密码加密保存到数据库中
    }
    // 执行 SQL 语句
                // error：执行 SQL 出错
                // results：执行 SQL 返回的结果
                // fields：执行 SQL 返回的字段的结果
    db.query(sql, data, (error, results, fields) => {
        if(error) {
            res.json({
                "code": 400,
                "error": error.message 
            })
        } else {
            res.json({
                "code": 200
            })
        }
    })

})