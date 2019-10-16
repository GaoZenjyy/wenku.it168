<template>
  <el-card class="box-card">
        <div class="nav"><a href="/login" class="here"> 登录 <i></i> </a> <a href="/register"> 注册 <i></i> </a>
        </div>
        <form class="popup" method="post">
            <ul class="list">
                <li class="form-item">
                    <div class="inp_box">
                        <div class="inp_box_1"><span class="user"></span>
                            <input value="" placeholder="用户名/手机号" id="username" maxlength="36" type="text" class="inp">
                        </div>
                    </div>
                    <div class="error hide" for="username"></div>
                </li>
                <li class="form-item">
                    <div class="inp_box">
                        <div class="inp_box_1"><span class="password"></span>
                            <input value="" placeholder="密码" id="password" maxlength="36" type="password" class="inp">
                        </div>
                    </div>
                    <div class="error hide" for="password"></div>
                </li>
                <li class="slide_code" id="slide_code" style="display: none;">
                    <div class="inp_box inp_box_gee">
                        <div id="embed-captcha"></div>
                        <p id="wait" class="show">正在加载验证码......</p>
                        <p id="notice" class=hide>请先完成验证</p>
                    </div>
                    <div class="error hide" for="embed-captcha"></div>
                </li>
                <li>
                    <div class="forgot"><a href="/forgotPassword/phone" target="_self">找回密码</a></div>
                </li>
                <li><input class="submit-btn" value="登录" id="btnSubmit" type="button"></li>
            </ul>
            <div class="login-qrcode" id="wxlogin" style="display: none;">

            </div>
            <input type="hidden" name="_token" value="zYzBO9kLvLeGWifhEPC09Ho8x4Ti00Q9rJkMhO8N">
        </form>
        <div class="title"><span>登录方式</span></div>
        <ul class="login_ways" id="login_ways">
            <li class="phone"><a type="1">手机号登录</a></li>
            <li class="pwd"><a class="here" type="2">密码登录</a></li>
                    </ul>

</el-card>


</template>
<script>

</script>


<style lang="less">

</style>
<style scoped>
@import "../assets/css/login.css";
</style>