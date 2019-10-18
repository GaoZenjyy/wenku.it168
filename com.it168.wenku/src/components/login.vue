<template>
  <div class="box-card">
    <div class="nav">
      <a href="/login" class="here">
        登录
        <i></i>
      </a>
      <a href="/register">
        注册
        <i></i>
      </a>
    </div>
    <el-tabs v-model="activeName" tab-position="bottom" type="card" @tab-click="handleClick">
      <el-tab-pane label="密码登录" class="phone" name="first">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="urules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="用户名" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model.number="ruleForm.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button round type="primary" id="submit-btn" @click="login('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="手机号登录" name="second">
        <el-form
          :model="phoneForm"
          status-icon
          :rules="prules"
          ref="phoneForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="phone">
            <el-input v-model="phoneForm.phone" placeholder="手机号" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model.number="phoneForm.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button round type="primary" id="submit-btn" @click="login('phoneForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>

    <!-- <div class="title">
      <span>登录方式</span>
    </div>
    <ul class="login_ways" id="login_ways">
      <li class="phone">
        <a type="1">手机号登录</a>
      </li>
      <li class="pwd">
        <a class="here" type="2">密码登录</a>
      </li>
    </ul> -->
  </div>
</template>
<script>
export default {
  data() {
    
    var validateuser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("用户名不正确，请重新输入[字母，数字,汉字,下划线4-16字符。不能为11位纯数字]"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatepassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码格式错误，请重新输入字母数字，符号6-16字节"));
      } else {
        callback();
      }
    };
        // 手机号
    var validatePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("手机号格式错误， 请重新输入"));
      } else {
        callback();
      }
    };
    return {
      activeName: "first",
      ruleForm: {
        username: "",
        password: ""
      },phoneForm: {
        phone: "",
        password: ""
      },
      urules: {
        username: [{ validator: validateuser, trigger: "blur" }],
        password: [{ validator: validatepassword, trigger: "blur" }]
      },prules: {
        phone: [{ validator: validatePhone, trigger: "blur" }],
        password: [{ validator: validatepassword, trigger: "blur" }]
      }
    };
  },

  methods: {
      async   login(formName){

      console.log(this.ruleForm);

       await this.$http.post("/login", this.ruleForm)
      .then((response) => {
              // this.$message.success('注册成功！')
              //  跳转到登录页
              this.$router.push({path: '/different'})
            });
      // console.log(res);

    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};



</script>
<style scoped>
@import "../assets/css/login.css";
</style>
<style lang="less">  
.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 70%;
  margin-top: 20px;
  margin-left: 20px;
}
.el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 47px;
  line-height: 47px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.el-button {
  cursor: pointer;
  background: #f7978e;
  text-align: center;
  line-height: 50px;
  box-shadow: 0 4px 15px 0 rgba(241, 81, 66, 0.42);
  text-align: center;
  padding: 12px 50px;
  border: none;
  color: #fff;
  width: 320px;
  height: 50px;
  font-size: 16px;
  position: relative;
  transition: all 0.3s;
  display: block;
  outline: 0px;
  -webkit-appearance: none;
  position: relative;
  left: 20px;
}
.el-button span {
  position: relative;
  top: -10px;
}
.el-button--primary:focus,
.el-button--primary:hover {
  background: #f15142;
  border-color: #f15142;
  color: #fff;
}
.el-button--primary {
  color: #fff;
  background-color: #f7978e;
  border-color: #f7978e;
  // #f7978e
}
.el-tabs__item.phone {
  padding: 0 20px;
  height: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  position: relative;
  background: url(../assets/image/login/phone3.png) center no-repeat;
  background-size: 46px;
}
.el-tabs__nav-wrap {
    overflow: hidden;
    position: relative;
}
.el-tabs__nav-scroll {
    overflow: hidden;
    position: relative;
    left: 200px;
}
</style>