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
              <div
                id="details-pdf-top-right-one"
                class="details-pdf-top-right-one"
                @click="changeCollection"
              >
                <i></i>
                <span>收藏</span>
              </div>
              <div class="details-pdf-top-right-two">分享</div>
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
      <div class="pdf">
        <!-- 
              pdf处理方法：
              1.先将pdf文件像路径一样引入项目
              2.调用pdf到此处
        -->
        <iframe src="/details" frameborder="0" width="830" height="700"></iframe>
      </div>
    </el-col>
    <el-col :span="6" class="right">
      <!-- 热门文档 -->
      <div class="right-word">
        <div class="right-word-title">
          <span>热门文档</span>
        </div>
        <!-- 文档目录 -->
        <div class="right-word-content">
          <div class="right-word-content-title">
            <i></i>
            <a>java从入门到精通.基础篇</a>
          </div>
          <div class="right-word-content-details">
            <span>
              阅读：
              <span>3080</span>
            </span>
            <span>
              下载：
              <span>21</span>
            </span>
          </div>
        </div>
        <div class="right-word-content">
          <div class="right-word-content-title">
            <i></i>
            <a>java从入门到精通.基础篇</a>
          </div>
          <div class="right-word-content-details">
            <span>
              阅读：
              <span>3080</span>
            </span>
            <span>
              下载：
              <span>21</span>
            </span>
          </div>
        </div>
      </div>
    </el-col>
  </div>
</template>
<script>
// 导入清除样式css
import "../assets/css/reset.css";

export default {
  data() {
    return {};
  },
  methods: {
    // 收藏切换
    changeCollection() {
      let span = document.querySelector("#details-pdf-top-right-one > span");
      let div = document.getElementById("details-pdf-top-right-one");
      let change = div.className;
      // 此处还差判断是否登录
      if (change == "details-pdf-top-right-one") {
        div.className = "details-pdf-top-right-one-in";
        span.innerHTML = "已收藏";
      } else if (change == "details-pdf-top-right-one-in") {
        div.className = "details-pdf-top-right-one";
        span.innerHTML = "收藏";
      }
    }
  }
};
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
      margin-bottom: 20px;
      .details-pdf-top {
        overflow: hidden;
        .details-pdf-top-left {
          float: left;
          margin: 10px 0;
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
          margin: 20px 0;
          div {
            font-size: 16px;
            display: inline-block;
            padding-left: 25px;
            margin-right: 15px;
          }
          .details-pdf-top-right-one {
            background-image: url("../assets/image/lcs_img/lcs_bg.png");
            background-repeat: no-repeat;
            background-position: -132px -971px;
          }
          // 已关注
          .details-pdf-top-right-one-in {
            background-image: url("../assets/image/lcs_img/lcs_bg.png");
            background-repeat: no-repeat;
            background-position: 0px -971px;
          }
          .details-pdf-top-right-two {
            background-image: url("../assets/image/lcs_img/lcs_bg.png");
            background-repeat: no-repeat;
            background-position: 0 -1003px;
            margin-left: 30px;
          }
        }
      }
      .details-pdf-bottom {
        font-size: 16px;
        a {
          color: #008cd6;
          padding-left: 20px;
          background-image: url("../assets/image/lcs_img/lcs_bg.png");
          background-repeat: no-repeat;
          background-position: -317px -1042px;
        }
        a:hover {
          text-decoration: underline;
        }
        span {
          display: inline-block;
          margin-left: 50px;
        }
      }
    }
  }
  .right {
    .right-word {
      .right-word-title {
        margin-top: 15px;
        padding-bottom: 6px;
        font-size: 16px;
        border-bottom: 1px solid #ccc;
        background-image: url("../assets/image/lcs_img/lcs_bg.png");
        background-repeat: no-repeat;
        background-position: -300px -1108px;
        span {
          color: #008cd6;
          padding-left: 36px;
        }
      }
      .right-word-content {
        width: 100%;
        height: 66px;
        .right-word-content-title {
          padding-left: 40px;
          position: relative;
          i {
            display: inline-block;
            width: 22px;
            height: 29px;
            position: absolute;
            left: 5px;
            top: 15px;
            background-image: url(/img/lcs_bg.c3182825.png);
            background-repeat: no-repeat;
            background-position: -230px -559px;
          }
          a {
            margin: 15px 0;
            display: inline-block;
            font-size: 16px;
            color: #666;
          }
        }
        .right-word-content-details {
          padding-left: 40px;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
</style>