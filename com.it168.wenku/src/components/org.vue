<template>
  <div>
    <!-- 图片栏 -->
    <div class="tupian">
      <img src="../assets/image/lcs_img/lcs_01.jpg" alt class="tu_one" />
      <img src="../assets/image/lcs_img/lcs_21-30-23.png" alt class="tu_two" />
    </div>
    <!-- 下边内容 -->
    <i class="tuijian"></i>
    <div class="mechanism">
      <p class="tuij">推荐机构</p>
    </div>
    <!-- 文档 整体大盒子-->
    <div class="Big_box">
      <!-- 第一个大盒子 -->
      <div class="one">
        <!-- 上部分 -->
        <div class="one_top">
          <div class="one_topleft">
            <img src="../assets/image/lcs_img/lcs_21586906.jpg" alt class="a" />
            <i class="b"></i>
          </div>
        </div>
        <!-- 下部分 -->
        <div class="one_bottom">
          <div class="one_bottomleft">
            <ul>
              <li>
                <a href>2019年国内云建设产业规模有望超过小龙虾的产业规模</a>
              </li>
              <li>
                <a href>IPv6环境下的网络安全观察.绿盟科技</a>
              </li>
            </ul>
          </div>
          <div class="one_bottomright">
            <ul>
              <li>规范规划</li>
              <li>粉红色方式</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 


<style scoped>
.tupian {
  height: 295px;
}
.tu_one {
  float: left;
  width: 860px;
}
.tu_two {
  float: right;
  width: 330px;
  height: 291px;
  /* margin-top: -3px; */
}
.mechanism {
  height: 40px;
  background-color: #ffffff;
  border-bottom: 1px solid #d3d3d3;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  margin-top: -48px;
}
/* 推荐机构 */
.tuij {
  color: #008cd6;
  text-indent: 2.5em;
  line-height: 40px;
  margin-top: 0px;
}
.tuijian {
  display: block;
  width: 120px;
  height: 48px;
  position: relative;
  top: 6px;
  right: -11px;
  background-image: url(../assets/image/lcs_img/lcs_bg.png);
  background-position: 0px -505px;
  background-repeat: no-repeat;
}
/* 整体大盒子 */
.Big_box {
  width: 860px;
}
/* 第一个盒子 */
.one {
  height: 188px;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  border-left: 1px solid #d3d3d3;
  margin-top: 10px;
}
.one_top {
  height: 94px;
  background-color: ffffff;
  border-bottom: 1px solid #d3d3d3;
}
.one_bottom {
  height: 94px;
  background-color: ffffff;
}
/* 上部分 */
.one_topleft {
  width: 330px;
  height: 94px;
  /* border: 1px solid red; */
}
.a {
  width: 140px;
  height: 70px;
  margin-left: 15px;
  margin-top: 10px;
  cursor: pointer;
}
.b {
  display: block;
  width: 120px;
  height: 48px;
  position: relative;
  top: -69px;
  right: -136px;
  background-image: url(../assets/image/lcs_img/lcs_bg.png);
  background-position: 32px -810px;
  background-repeat: no-repeat;
  cursor: pointer;
}

/* 下部分 左边*/
.one_bottomleft {
  width: 430px;
  height: 94px;
  border: 1px solid red;
  float: left;
}
ul {
  line-height: 30px;
  color: #666666;
  margin-top: 21px;
  margin-left: -6px;
}
/* a标签 */
a {
  text-decoration: none;
  color: #666666;
}
a:hover {
  color: #d20131;
}
/* 下部分右边 */
.one_bottomright {
  width: 330px;
  height: 94px;
  border: 1px solid red;
  float: right;
}
</style>
