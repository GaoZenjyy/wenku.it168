<template>
  <el-card class="box-card">
    <div class="nav">
      <a href="/login">
        登录
        <i></i>
      </a>
      <a href="/register" class="here">
        注册
        <i></i>
      </a>
    </div>
    <form class="popup" action="#" method="post">
      <ul class="list">
        <li class="form-item">
          <div class="inp_box">
            <div class="inp_box_1">
              <span class="user"></span>
              <input value placeholder="用户名" id="username" maxlength="36" type="text" class="inp" />
            </div>
          </div>
          <div class="error hide" for="username"></div>
        </li>
        <li>
          <div class="inp_box">
            <div class="inp_box_1" id="divphone">
              <span class="phone"></span>
              <div class="area-code" id="area-code">
                <input value="+86" placeholder type="text" readonly="readonly" id="areacode" />
              </div>
              <input value="" placeholder="手机号码" id="phone" name="phone" maxlength="11" type="text" pattern="[0-9]*" class="inp2">
            <!-- <ul class="areacode-select" style="display: block;"><li data-value="+86"><i>+86</i>中国</li><li data-value="+852"><i>+852</i>中国香港特别行政区</li><li data-value="+853"><i>+853</i>中国澳门特别行政区</li><li data-value="+886"><i>+886</i>中国台湾</li><li data-value="+1"><i>+1</i>美国</li><li data-value="+81"><i>+81</i>日本</li><li data-value="+82"><i>+82</i>韩国</li></ul> -->
            </div>
          </div>
          <div class="error hide" for="phone"></div>
        </li>
        <li class="slide_code" style="display: none;">
          <div class="inp_box inp_box_gee">
            <div id="embed-captcha"></div>
            <p id="wait" class="show">正在加载验证码......</p>
            <p id="notice" class="hide">请先完成验证</p>
          </div>
          <div class="error hide" for="embed-captcha"></div>
        </li>
        <li>
          <div class="inp_box">
            <div class="inp_box_1" id="divbtncode">
              <span class="phone2"></span>
              <input value placeholder="手机验证码" id="code" maxlength="6" type="text" class="inp" />
              <input class="code_btn" id="btnCode" value="获取验证码" type="button" />
            </div>
          </div>
          <div class="error hide" for="code"></div>
        </li>
        <li>
          <div class="inp_box">
            <div class="inp_box_1">
              <span class="password"></span>
              <input
                value
                placeholder="请输入密码"
                id="password"
                maxlength="36"
                type="password"
                class="inp"
              />
            </div>
          </div>
          <div class="error hide" for="password"></div>
        </li>
        <li>
          <input class="submit-btn" value="注册" id="btnSubmit" type="button" />
        </li>
      </ul>
      <input type="hidden" name="_token" value="zYzBO9kLvLeGWifhEPC09Ho8x4Ti00Q9rJkMhO8N" />
      <input type="hidden" name="_regToken" id="_regToken" value />
    </form>
    <div class="cue">
      点击“注册”按钮，即表示您同意并愿意遵守TPUB
      <br />
      <a href="/useragreement.html" target="_blank">《用户协议》</a>
    </div>
  </el-card>
</template>
<script>
</script>


<style scoped>
@import "../assets/css/login.css";
</style>