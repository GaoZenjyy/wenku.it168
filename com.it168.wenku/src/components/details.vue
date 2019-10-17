<template>
  <div class="details">
    <!-- left-top -->
    <el-col :span="17" class="left">
      <div class="grid-content bg-purple-dark left-top">
        <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>文库首页</el-breadcrumb-item>
          <el-breadcrumb-item>编程语言</el-breadcrumb-item>
          <el-breadcrumb-item>Java</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    <!-- content-pdf -->
      <div class="pdf-title">
          <div class=""></div>
      </div>
    </el-col>
    <el-col :span="6" class="right">
      <div class="right-top">
        <a href="/javascript:;">热门文档</a>
      </div>
    </el-col>
  </div>
</template>
<script>
// 导入清楚样式css
import "../assets/css/reset.css";

export default {};
</script>

<style lang="less" scoped>
.details {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  .left {
    .left-top {
      margin-top: 15px;
      padding-bottom: 10px;
      margin-right: 5px;
      border-bottom: 1px dashed #ccc;
    }
    .pdf-title{
        width: 100%;
        height: 800px;
    }
  }
  .right-top {
    margin-top: 15px;
    padding-bottom: 6px;
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    background-image: url("../assets/image/lcs_img/lcs_bg.png");
    background-repeat: no-repeat;
    background-position: -300px -1108px;

    a {
      text-decoration: none;
      color: #008cd6;
      padding-left: 36px;
    }
  }
}
</style>