<template>
  <el-card class="box-card">
        <div class="nav"><a href="/login"> 登录 <i></i> </a> <a href="/register" class="here"> 注册 <i></i> </a>
        </div>
        <form class="popup" action="#" method="post">
            <ul class="list">
                <li class="form-item">
                    <div class="inp_box">
                        <div class="inp_box_1"><span class="user"></span>
                            <input value="" placeholder="用户名" id="username" maxlength="36" type="text" class="inp">
                        </div>
                    </div>
                    <div class="error hide" for="username"></div>
                </li>
                <li>
                    <div class="inp_box">
                        <div class="inp_box_1" id="divphone"><span class="phone"></span>

                        </div>
                    </div>
                    <div class="error hide" for="phone"></div>
                </li>
                <li class="slide_code" style="display: none;">
                    <div class="inp_box inp_box_gee">
                        <div id="embed-captcha"></div>
                        <p id="wait" class="show">正在加载验证码......</p>
                        <p id="notice" class=hide>请先完成验证</p>
                    </div>
                    <div class="error hide" for="embed-captcha"></div>
                </li>
                <li>
                    <div class="inp_box">
                        <div class="inp_box_1" id="divbtncode"><span class="phone2"></span>
                            <input value="" placeholder="手机验证码" id="code" maxlength="6" type="text" class="inp">

                        </div>
                    </div>
                    <div class="error hide" for="code"></div>
                </li>
                <li>
                    <div class="inp_box">
                        <div class="inp_box_1"><span class="password"></span>
                            <input value="" placeholder="请输入密码" id="password" maxlength="36" type="password"
                                   class="inp">
                        </div>
                    </div>
                    <div class="error hide" for="password"></div>
                </li>
                <li><input class="submit-btn" value="注册" id="btnSubmit" type="button"></li>
            </ul>
            <input type="hidden" name="_token" value="zYzBO9kLvLeGWifhEPC09Ho8x4Ti00Q9rJkMhO8N">
            <input type="hidden" name="_regToken" id="_regToken" value="">
        </form>
        <div class="cue">点击“注册”按钮，即表示您同意并愿意遵守TPUB<br><a href="/useragreement.html" target="_blank">《用户协议》</a></div>

</el-card>


</template>
<script>

</script>


<style scoped>
@import "../assets/css/login.css";
</style>