<template>
  <div class="home">
    <el-container>
      <el-header style="height:221px">
        <!-- d登录导航 -->
        <div class="outline">
          <div class="wktop">
            <div class="wktop-content-left">
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
              <a href="javascript:;">退出</a>
              <a href="javascript:;">帮助</a>
            </div>
            <div class="wktop-content-right">
              <a href="javascript:;">我的积分</a> |
              <a href="javascript:;">我的文档</a> |
              <a href="javascript:;">我的收藏</a> |
              <a href="javascript:;">我的下载</a> |
              <a href="javascript:;">我的消息</a>
              <span>(8)</span>
            </div>
            <div class="wktop-content-height">
              <a href="javascript:;">注册</a>|
              <a href="javascript:;">登录</a>|
              <a href="javascript:;">IT168文库</a>|
              <a href="javascript:;">帮助</a>
            </div>
          </div>
        </div>
        <!-- 搜索区域 -->
        <div class="search">
          <div class="search-img">
            <div class="search-connent">
              <div class="search-connent-left">
                <a href="javascript:;" class="search-connent-left-a"></a>
              </div>
              <div class="search-connent-right">
                <el-input class="input-with-select"></el-input>

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
      <el-footer style="height:200px">
        <div class="certificate"></div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "/"
    };
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
  // background-color: #cc0000;
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
  float: left;
  padding-top: 53px;
  position: relative;
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
</style>
