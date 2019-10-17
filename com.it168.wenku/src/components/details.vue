<template>
  <div class="details">
    <!-- left-top -->
    <el-col :span="17" class="left">
      <div class="grid-content bg-purple-dark left-top">
        <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">文库首页</el-breadcrumb-item>
          <el-breadcrumb-item>编程语言</el-breadcrumb-item>
          <el-breadcrumb-item>Java</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- content-pdf -->
      <div class="pdf-title">
        <div class="details-pdf">
          <!-- 文章名 -->
          <div class="details-pdf-top">
            <div class="details-pdf-top-left">
              <em></em>
              <span>java从入门到精髓.基础篇</span>
            </div>
            <div class="details-pdf-top-right">
              <span>收藏</span>
              <span>分享</span>
            </div>
          </div>
          <!-- 用户数据 -->
          <div class="details-pdf-bottom">
            <a href="#">rainbowdragoon</a>
            <span>2019-07-24 14:10:33</span>
            <span>下载量：39次</span>
            <span>浏览量：3081次</span>
          </div>
        </div>
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
// 导入清除样式css
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
    .pdf-title {
      width: 100%;
      height: 800px;
      .details-pdf-top {
        overflow: hidden;
        .details-pdf-top-left {
          float: left;
          margin:10px 0;
          em {
            display: inline-block;
            width: 22px;
            height: 29px;
            background-image: url("../assets/image/lcs_img/lcs_bg.png");
            background-repeat: no-repeat;
            background-position: -230px -559px;
          }
          span {
            font-size: 18px;
            padding-left: 10px;
          }
        }
        .details-pdf-top-right {
          float: right;
          margin:20px 0;
          span{
              font-size: 15px;
              display: inline-block;
              width: 20px;
              height: 20px;

          }
        }
      }
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