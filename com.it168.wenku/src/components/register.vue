<template>
  <el-card class="box-card">
  <div  class="text item">

  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="登录" name="first">
      <el-form
        status-icon
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="密码" prop="pass">
          <el-input type="password"  autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="注册" name="second">配置管理</el-tab-pane>
  </el-tabs>
  </div>
</el-card>


</template>
<script>
export default {
  data() {
    return {
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>


<style lang="less">
.login {
  width: 500px;
  height: 350px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}



  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
    margin: 0 auto;
  }
</style>