<template>
  <div class="home">
    <el-container>
      <el-header style="height:221px">
        <!-- d登录导航 -->
        <div class="outline">
          <div class="wktop">
            <div class="wktop-content-left" ref="abc">
              <span>hi ,</span>&nbsp;
              <b>
                <a href="javascript:;">用户</a>
              </b>&nbsp;&nbsp;
              <a href="javascript:;">IT168通行证</a>
              <a href="javascript:;" class="wktop-content-left-a" style="color:#ffffff">领200金币</a>
              <a href="javascript:;" class="wktop-content-left-b">
                <img alt="Vue logo" src="../assets/image/lrtd.gif" />
              </a>
              <a href="javascript:;">修改密码</a>
              <a href="javascript:;" @click="logout">退出</a>
              <a href="javascript:;">帮助</a>
            </div>
            <div class="wktop-content-right" ref="cba">
              <a href="javascript:;">我的积分</a> |
              <a href="javascript:;">我的文档</a> |
              <a href="javascript:;">我的收藏</a> |
              <a href="javascript:;">我的下载</a> |
              <a href="javascript:;">我的消息</a>
              <span>(8)</span>
            </div>
            <div class="wktop-content-height" ref="ddb">
              <a href="/register">注册</a>|
              <a href="/login">登录</a>|
              <a href="javascript:;">IT168文库</a>|
              <a href="javascript:;">帮助</a>
            </div>
          </div>
        </div>
        <!-- 搜索区域 -->
        <div class="search">
          <div class="search-img">
            <div class="search-connent">
              <div class="search-connent-left clearfix">
                <a href="javascript:;" class="search-connent-left-a"></a>
              </div>
              <div class="search-connent-right">
                <el-input class="input-with-select" v-model="file_name"></el-input>

                <div class="search-connent-right-top">
                  <button class="inputbutton"></button>
                </div>
                <div class="search-connent-right-bottom">
                  <button class="inputbutton"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- tab区域 -->
        <div class="menus">
          <div class="menu-top">
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              background-color="#00afd6"
              text-color="#fff"
              active-text-color="#ffb74f"
              router
            >
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="/classification">分类</el-menu-item>
              <el-menu-item index="/thecorpus">文集</el-menu-item>
              <el-menu-item index="/themeeting">会议</el-menu-item>
              <el-menu-item index="/cooperation">合作机构</el-menu-item>
            </el-menu>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer style="height:199px">
        <div class="certificatea">
          <div class="certificate">
            <div class="bottomofthe">
              <div class="bottomofthea">
                <span>网站帮助：</span>
                <a href="javascipt:;">如何上传</a>
                <a href="javascipt:;">如何下载</a>
                <a href="javascipt:;">懒人充值</a>
                <a href="javascipt:;">常见问题</a>
                <span>QQ群：14543488</span>
              </div>
              <div class="bottomofthea-bottom">
                <p>
                  盛拓传媒：
                  <a href="javascipt:;">IT168</a>|
                  <a href="javascipt:;">泡泡网</a>|
                  <a href="javascipt:;">爱极客</a>|
                  <a href="javascipt:;">试客</a>|
                  <a href="javascipt:;">ITPUB</a>|
                  <a href="javascipt:;">IT文库</a>|
                  <a href="javascipt:;">ChinaUnix</a>|
                  <a href="javascipt:;">本友会</a>|
                  <a href="javascipt:;">机友会</a>|
                  <a href="javascipt:;">哈喽维修</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="certificateb">
          <div class="certificateb-comment">
            <p>
              <a href="javascipt:;">关于我们</a>|
              <a href="javascipt:;">广告服务</a>|
              <a href="javascipt:;">使用条款</a>|
              <a href="javascipt:;">联系我们</a>
            </p>
            <div class="certificateb-bottom">
              <span>北京盛拓优讯信息技术有限公司. 版权所有</span>
              <a href="javascipt:;">中华人民共和国增值电信业务经营许可证 编号：京B2-20170206</a>
              <span>北京市公安局海淀分局网监中心备案编号：11010802020118</span>
            </div>
            <div class="certificateb-bottom-a">
              <a href="javascipt:;">广播电视节目制作经营许可证:(京) 字第07177号</a>
              <span>测绘资质证书:乙测资字11005067 网络文化经营许可证:京网文(2018) 1456-138号</span>
            </div>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "/",
      token: "",
      // 搜索
      file_name: ""
    };
  },
  methods: {
    logout() {
      window.sessionStorage.removeItem("token");
      location.reload();
      this.$router.push("/different");
    }
  },
  created() {
    let token = window.sessionStorage.getItem("token");
    this.token = token;
    // console.log(this.token);
  },
  mounted() {
    // if(this.token)
    // console.log(this.token);
    if (this.token) {
      this.$refs.abc.style.display = "block";
      this.$refs.cba.style.display = "block";
      this.$refs.ddb.style.display = "none";
    } else {
      this.$refs.abc.style.display = "none";
      this.$refs.cba.style.display = "none";
      this.$refs.ddb.style.display = "block";
    }

    // console.log(this.$refs.abc.style.display);
  }
};
</script>
<style lang="less" scoped>
// .el-header {
//   // margin-bottom: 300px;
//   height: 221px;
// }
.el-header,
.el-footer {
  padding: 0;
}

.outline {
  height: 36px;
  background-color: #f3f3f3;
}
.wktop {
  width: 1200px;
  height: 36px;
  margin: 0 auto;
  // background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.wktop-content-height {
  // float:right;
  // display: none;
  position: absolute;
  right: 0px;
}
.wktop-content-height a {
  color: #666666;
  margin: 2px;
  font-size: 16px;
  line-height: 36px;
  // font-style: none;
  text-decoration: none;
}
.wktop-content-height a:hover {
  color: #cc0000;
  text-decoration: underline;
}
.wktop-content-right {
  display: none;
}
.wktop-content-right a {
  color: #666666;
  // margin-left: 2px;
  font-size: 16px;
  line-height: 36px;
  text-decoration: none;
}
.wktop-content-right a:hover {
  color: #cc0000;
  text-decoration: underline;
}
.wktop-content-left {
  // height: 36px;
  display: none;
}
.wktop-content-left a {
  // line-height: 36px;
  margin: 3px;
}
.wktop-content-left a {
  color: #666666;
  // line-height: 36px;
  font-size: 16px;
  text-decoration: none;
  margin-left: 20px;
}
.wktop-content-left a:hover {
  color: #cc0000;
  text-decoration: underline;
}
.wktop-content-left-a {
  // display: block;
  // color: #ffffff;
  display: inline-block;
  width: 106px;
  height: 23px;
  background-color: #dd9723;
  text-align: center;
  border-radius: 20px;
  // margin-top: 20px;
}
// .wktop-content-left-b {
// }
.wktop-content-left-b img {
  // margin-top: 20px;
  display: inline-block;
  // margin-top: 20px;
}
.search {
  width: 100%;
  height: 138px;
  border-top: 1px solid #dbdbdb;
}
.search-img {
  width: 100%;
  height: 138px;
  background-image: url(../assets/image/head_bg.png);
  background-position: 0px 0px;
  background-repeat: no-repeat;
}
.search-connent {
  width: 1200px;
  height: 138px;
  margin: 0 auto;
  position: relative;
  // background-color: #cc0000;
}
.clearfix {
  content: "";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
.search-connent-left {
  width: 320px;
  height: 138px;
  float: left;
  // background-color: #cc0000;
}
.search-connent-left-a {
  display: block;
  width: 260px;
  height: 138px;
  // background-color: #dd9723;
}
.search-connent-right {
  width: 680px;
  height: 36px;
  // float: left;
  padding-top: 53px;
  position: absolute;
  top: -2px;
  left: 325px;
  // position: relative;
  // background-color: #cc0000;
}
.input-with-select {
  width: 409px;
  height: 25px;
  margin-right: 10px;
}
.inputbutton {
  width: 124px;
  height: 36px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.el-button + .el-button {
  margin: 0;
}
.search-connent-right-top {
  // position:relative;
  position: absolute;
  top: 55px;
  left: 418px;
  width: 124px;
  height: 36px;
  // background-color: #cc0000;
  background-image: url(../assets/image/head_bg.png);
  background-position: 0px -139px;
  background-repeat: no-repeat;
}
.search-connent-right-bottom {
  // position:relative;
  position: absolute;
  top: 55px;
  left: 543px;
  width: 124px;
  height: 36px;
  background-color: #cc0000;
  background-image: url(../assets/image/head_bg.png);
  background-position: -125px -139px;
  background-repeat: no-repeat;
}
.menus {
  width: 100%;
  height: 36px;
  background-color: #00afd6;
}
.menu-top {
  width: 1200px;
  height: 36px;
  margin: 0 auto;
}
.el-menu-demo {
  height: 36px;
}
.el-menu-item {
  height: 36px;
  width: 140px;
  text-align: center;
  font-size: 15px;
}
.el-menu--horizontal > .el-menu-item {
  line-height: 36px;

  height: 36px;
}
.el-main {
  width: 1200px;
  // height: 400px;
  // background-color: #cc0000;
  margin: 0 auto;
  padding: 0;
}
.el-footer {
  height: 200px;
}
.certificate {
  width: 1200px;
  height: 200px;
  margin: 0 auto;
}
.certificatea {
  width: 100%;
  height: 84px;
  background-color: #f3f3f3;
}
.bottomofthe {
  width: 100%;
  height: 64px;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  // background-color: #f3f3f3;
}
.bottomofthea {
  // margin: 0 auto;
  height: 32px;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  color: #666;
  // margin-left: 10px;
}
.bottomofthea a {
  text-decoration: none;
  // margin-left: 10px;
  color: #666;

  margin-right: 10px;
}
.bottomofthea a:hover {
  color: #cc0000;
  text-decoration: underline;
}
.bottomofthea-bottom {
  height: 32px;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  color: #666;
}
.bottomofthea-bottom p {
  margin: 0;
}
.bottomofthea-bottom a {
  text-decoration: none;
  margin-left: 1px;
  margin-right: 4px;
  color: #666;
}
.bottomofthea-bottom a:hover {
  color: #cc0000;
  text-decoration: underline;
}
.certificateb {
  width: 100%;
  height: 65px;
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: #00acd3;
}
.certificateb-comment {
  width: 1200px;
  height: 65px;
  margin: 0 auto;
  // background-color: #cc0000;
}
.certificateb-comment p {
  margin: 0;
  padding-bottom: 10px;
}
.certificateb-comment {
  text-align: center;
  // margin: 0;
  font-size: 14px;
}
.certificateb-comment p > a {
  text-decoration: none;
  margin-right: 4px;
  color: #006982;
}
.certificateb-comment p > a:hover {
  color: #006982;
  text-decoration: underline;
}
.certificateb-bottom {
  // text-align: center;
  // margin: 0 auto;
  font-size: 14px;
  color: #006982;
}
.certificateb-bottom a {
  margin-left: 5px;
  margin-right: 5px;
  text-decoration: none;
  color: #006982;
}
.certificateb-bottom a:hover {
  color: #006982;
  text-decoration: underline;
}
.certificateb-bottom-a {
  color: #006982;
  margin-top: 3px;
}
.certificateb-bottom-a a {
  margin-left: 5px;
  margin-right: 15px;
  text-decoration: none;
  color: #006982;
}
.certificateb-bottom-a a:hover {
  color: #006982;
  text-decoration: underline;
}
</style>
