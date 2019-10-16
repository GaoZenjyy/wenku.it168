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
          <!-- 左边 -->
          <div class="one_topleft">
            <img src="../assets/image/lcs_img/lcs_21586906.jpg" alt class="a" />
            <i class="b"></i>
          </div>
          <!-- 右边 -->
          <div class="one_topright">
            <div class="topright_one">
              <p class="one_p">24</p>
              <p class="one_span">文档量</p>
            </div>
            <div class="topright_one">
              <p class="one_p">7885</p>
              <p class="one_span">浏览量</p>
            </div>
            <div class="topright_two">
              <p class="one_p">3</p>
              <p class="one_span">下载量</p>
            </div>
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
              <li class="bottomright">
                <span class="yue">阅读量：3111</span>
                <span class="xia">下载量：0</span>
              </li>
              <li class="bottomright">
                <span class="yue">阅读量：644</span>
                <span class="xia">下载量：0</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 


<style scoped>
/* 图片 */
.tupian {
  height: 295px;
}
.tu_one {
  float: left;
  width: 856px;
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
/* 推荐机构 */
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
/* 左边 */
.one_topleft {
  width: 330px;
  height: 94px;
  float: left;
}
.a {
  width: 140px;
  height: 70px;
  margin-left: 15px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 15px;
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
/* 上部分 右边 */
.one_topright {
  width: 330px;
  height: 94px;
  float: right;
}
.topright_one {
  width: 108px;
  height: 37px;
  border-right: 1px solid #d2d2d2;
  /* border: 1px solid palegreen; */
  margin-top: 23px;
  display: inline-block;
}
.topright_two {
  width: 108px;
  height: 37px;
  /* border-right: 1px solid #d2d2d2; */
  /* border: 1px solid palegreen; */
  margin-top: 23px;
  display: inline-block;
}
.one_p {
  text-align: center;
  /* font-size: 12px; */
  color: #999;
  color: #f00;
  /* margin-top: 29px; */
  margin: 0px;
}
.one_span {
  text-align: center;
  font-size: 13px;
  color: #999;
  margin: 0 0 0 0;
}

/* 下部分 左边*/
.one_bottomleft {
  width: 430px;
  height: 94px;
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
  float: right;
}
.bottomright {
  list-style: none;
  color: #afafaf;
  /* text-indent: 2.5em; */
  font-size: 14px;
  /* width: 230px; */
  /* border: 1px solid plum; */
  height: 30px;
}
.yue {
  color: #afafaf;
  /* text-indent: 2.5em; */
  font-size: 14px;
  width: 120px;
  /* border: 1px solid plum; */
  height: 30px;
  margin-left: 20px;
  display: inline-block;
  margin-top: -30px;
}
.xia {
  color: #afafaf;
  /* text-indent: 2.5em; */
  font-size: 14px;
  width: 120px;
  /* border: 1px solid plum; */
  height: 30px;
  margin-left: 20px;
  display: inline-block;
  margin-top: -30px;
}
</style>
