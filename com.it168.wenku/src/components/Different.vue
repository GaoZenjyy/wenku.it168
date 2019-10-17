<template>
  <div class="different">
    <!-- 内容一 -->
    <div class="content-a">
      <div class="content-top clearfix">
        <div class="content-top-left">
          <div class="content-top-left-a">
            <div class="content-top-left-a-top">技术分类</div>
            <div class="content-top-left-a-bottom">
              <ul class="clearfix">
                <li v-for="(item,index) in listData" :key="index">
                  <a href="#">{{item.attribute_name}}</a>
                </li>
              </ul>
            </div>
            <div class="content-top-left-a-bottom-a">热搜分类</div>
            <div class="content-top-left-a-bottom-b">
              <a href="#">Python</a>
              <a href="#">javaScript</a>
              <a href="#">MySQL</a>
              <a href="#">NoSQL</a>
              <a href="#">java</a>
              <a href="#">C/C++</a>
            </div>
          </div>
        </div>
        <div class="content-top-middle">
          <div class="content-top-middle-top">
            <template>
              <div class="block">
                <el-carousel height="290px">
                  <el-carousel-item v-for="(item,index) in simage" :key="index">
                    <a :href="item.url">
                      <img :src="item.img" alt />
                    </a>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </template>
          </div>
          <div class="content-top-middle-top-bottom">文库首发</div>
          <ul class="content-top-middle-top-bottom-a">
            <li>
              <a href="#">
                <img src="../assets/image/gaoy/wenksf1.png" alt />
              </a>
            </li>
            <li style=" margin-left:10px">
              <a href="#">
                <img src="../assets/image/gaoy/wenksf2.png" alt />
              </a>
            </li>
          </ul>
        </div>
        <div class="content-top-right">
          <div class="content-top-right-top">
            <dl>
              <dt>IT168文库海量技术文档</dt>
              <dd>
                <span>1388942</span>篇
              </dd>
              <dt>国内热门尖端会议资料</dt>
              <dd>
                <span>1004</span>篇
              </dd>
              <dt>技术文集</dt>
              <dd>
                <span>499</span> 篇
              </dd>
            </dl>
          </div>
          <div class="content-top-right-bottom">
            <div class="content-top-right-bottom-a">文库公告</div>
            <div class="content-top-right-bottom-b">
              <ul>
                <li>
                  <a href="#">IT168文库新版上线，充值立打八八折！</a>
                </li>
                <li>
                  <a href="#">关注文库微信公众号，凭用户名领取50金币！</a>
                </li>
                <li>
                  <a href="#">IT168文库APP推出，手机也可看文档！</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容二 -->
    <div class="content-b clearfix">
      <div class="content-b-left">
        <div class="content-b-left-top">热门文档</div>
        <ul class="content-b-left-top-ul">
          <li v-for="(item,index) in listWenDang" :key="index">
            <!-- <div v-for="(srcs,indexs) in simages" :key="indexs"> -->
            <a href="javascript:;">
              <!-- {{srcs}} -->
              <img :src="simages[index].img" alt />
              <span>{{item.file_name}}</span>
            </a>
            <!-- </div> -->

            <p>
              <i></i>
              {{item.file_browse}}人阅读
            </p>
          </li>
        </ul>
        <ul class="content-b-left-top-ul-a clearfix">
          <li v-for="item in listWenDangXz" :key="item.id">
            <em></em>
            <span>
              <a href="javascript:;">{{item.file_name}}</a>
            </span>
            <i>{{item.file_download}}下载</i>
          </li>
          <!-- <li></li> -->
        </ul>
      </div>
      <div class="content-b-right">
        <div>
          <div class="content-b-right-top">做任务 赢金币</div>
          <div class="content-b-right-top-d">
            <ul class="clearfix">
              <li><a href="" class="content-b-right-top-f"></a></li>
              <li><a href="" class="content-b-right-top-m"></a></li>
            </ul>
          </div>
          <div></div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 轮播图 图片
      simage: [
        {
          url: "#",
          img: require("../assets/image/gaoy/loubo1.jpg")
        },
        {
          url: "#",
          img: require("../assets/image/gaoy/loubo2.jpg")
        },
        {
          url: "#",
          img: require("../assets/image/gaoy/loubo3.jpg")
        },
        {
          url: "#",
          img: require("../assets/image/gaoy/loubo4.jpg")
        }
      ],
      // 技术分类
      listData: [],
      // 热门文档
      listWenDang: [],
      // 热门文档图片
      simages: [
        {
          url: "#",
          img: require("../assets/image/gaoy/wendangxz1.jpg")
        },
        {
          url: "#",
          img: require("../assets/image/gaoy/wendangxz2.jpg")
        },
        {
          url: "#",
          img: require("../assets/image/gaoy/wendangxz3.jpg")
        },
        {
          url: "#",
          img: require("../assets/image/gaoy/wendangxz4.jpg")
        }
      ],
      // 热门文档下载
      listWenDangXz: []
    };
  },
  methods: {
    async getListdata() {
      const { data: res } = await this.$http.get("/technology");
      // console.log(res);
      // console.log(res);
      let splc = res.data.splice(0, "1");
      this.listData = res.data;
      // console.log(splc);
      // console.log(res.data);
      // console.log(this.listData);
    },
    async getListWenDang() {
      const { data: res } = await this.$http.get("popular/document/read");
      // console.log(res);
      this.listWenDang = res.data;
      // console.log(this.listWenDang);
    },
    async getListWenDangxz() {
      const { data: res } = await this.$http.get("/popular/document/download");
      // console.log(res);
      this.listWenDangXz = res.data;
    }
  },
  created() {
    this.getListdata();
    this.getListWenDang();
    this.getListWenDangxz();
  }
};
</script>
<style lang="less" scoped>
.content-a {
  width: 100%;
  height: 418px;
  padding-bottom: 12px;

  // background-color: aqua;
}
.clearfix {
  content: "";
  display: block;
  clear: both;
}
.content-top {
  width: 100%;
  height: 334px;
  // background-color: #000;
}
.content-top-left {
  width: 264px;
  height: 418px;
  float: left;
  box-sizing: border-box;

  // background-color: aqua;
}
.content-top-middle {
  width: 590px;
  height: 418px;
  float: left;
  // background-color: blue;
  margin-left: 8px;
}
.content-top-right {
  float: right;
  width: 330px;
  height: 418px;
  // background-color: darkcyan;
}
.content-top-right-top {
  width: 330px;
  height: 290px;
  background-image: url("../assets/image/lcs_img/lcs_bg.png");
  background-position: 0px 0px;
  background-repeat: no-repeat;
}
.content-top-right-top dl {
  display: block;
  // margin: 0;
  margin: 0 auto;
  width: 240px;
  font-style: italic;
  padding-top: 35px;
}
.content-top-right-top dl > dt {
  font-size: 16px;
  line-height: 30px;
  color: #333;
  padding: 5px 0 0 5px;
  text-shadow: 2px 4px 2px #ccc;
}
.content-top-right-top dl > dd {
  font-size: 30px;
  color: #008cd6;
  text-shadow: 2px 4px 2px #ccc;
  margin: 0;
}
dd > span {
  color: #f00;
}
.content-top-right-bottom {
  width: 100%;
  height: 124px;
  // background-color: #008cd6;
  margin-top: 4px;
}
.content-top-right-bottom-a {
  width: 295px;
  height: 40px;
  padding-left: 35px;
  font-size: 16px;
  line-height: 40px;
  background-image: url("../assets/image/lcs_img/lcs_bg.png");
  background-position: 10px -450px;
  background-repeat: no-repeat;
}
.content-top-right-bottom-b {
  width: 330px;
  height: 84px;
  background-color: #00acd3;
}
.content-top-right-bottom-b ul {
  width: 290px;
  margin: 0 auto;
  padding-top: 9px;
  list-style: none;
  padding-left: 0px;
}
.content-top-right-bottom-b ul > li {
  height: 22px;
  line-height: 22px;
  padding-left: 22px;
  font-size: 14px;
  overflow: hidden;
  // margin-top: 2px;
  background-image: url("../assets/image/lcs_img/lcs_bg.png");
  background-position: -315px -321px;
  background-repeat: no-repeat;
}
.content-top-right-bottom-b ul > li a {
  text-decoration: none;
  color: #fff;
}
.content-top-right-bottom-b ul > li a:hover {
  color: #fff;
  text-decoration: underline;
}
.content-top-middle-top {
  width: 590px;
  height: 290px;
}
.block a {
  display: block;
}
.block a > img {
  display: block;
  width: 590px;
  height: 290px;
}
.content-top-left-a {
  width: 262px;
  height: 333px;
  // background-color: #008cd6;
  border: 1px solid #d2d2d2;
  border-bottom: 0;
}
.content-top-left-a-top {
  width: 227px;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  color: #555;
  padding-left: 35px;
  border-bottom: 1px solid #d2d2d2;
  background-image: url("../assets/image/lcs_img/lcs_bg.png");
  background-position: 10px -306px;
  background-repeat: no-repeat;
}
.content-top-left-a-bottom {
  width: 212px;
  height: 228px;
  margin: 20px 25px 0 25px;
}
.content-top-left-a-bottom ul {
  padding: 0;
}
.content-top-left-a-bottom ul > li {
  width: 106px;
  height: 32px;
  padding-bottom: 6px;
  list-style: none;
  float: left;
}
.content-top-left-a-bottom ul > li > a {
  text-decoration: none;
  text-align: center;
  display: block;
  // padding-left: 22px;
  line-height: 32px;
  font-size: 16px;
  color: #666;
}
.content-top-left-a-bottom ul > li > a:hover {
  background-color: #eaeaea;
}
.content-top-left-a-bottom-a {
  width: 227px;
  height: 40px;
  margin-top: 4px;
  padding-left: 35px;
  // background-color: #f00;
  font-size: 16px;
  line-height: 40px;
  color: #e4007f;
  background-image: url("../assets/image/lcs_img/lcs_bg.png");
  background-position: 10px -350px;
  background-repeat: no-repeat;
}
.content-top-left-a-bottom-b {
  width: 239px;
  height: 60px;
  padding: 12px 0 12px 25px;
  background-color: #e4007f;
}
.content-top-left-a-bottom-b a {
  height: 30px;
  color: #fff;
  display: inline-block;
  margin-right: 15px;
  font-size: 14px;
  text-decoration: none;
}
.content-top-left-a-bottom-b a:hover {
  text-decoration: underline;
}
.content-top-middle-top-bottom {
  width: 555px;
  height: 40px;
  padding-left: 35px;
  margin-top: 4px;
  line-height: 40px;
  font-size: 16px;
  background-image: url("../assets/image/lcs_img/lcs_bg.png");
  background-position: 10px -394px;
  background-repeat: no-repeat;
}
.content-top-middle-top-bottom-a {
  width: 590px;
  height: 84px;
  // background-color: #00acd3;
  padding: 0;
  margin: 0;
}
.content-top-middle-top-bottom-a li {
  list-style: none;
  float: left;
  width: 290px;
  height: 84px;
  // background-color: #e4007f;
}
.content-top-middle-top-bottom-a li a {
  display: block;
  width: 290px;
  height: 84px;
}
.content-top-middle-top-bottom-a li > a > img {
  display: block;
  width: 290px;
  height: 84px;
}
.content-b {
  width: 100%;
  height: 500px;
  padding-top: 12px;
  // background-color: #008cd6;
}
.content-b-left {
  width: 862px;
  height: 521px;
  padding-bottom: 20px;
  // background-color: #00acd3;
  float: left;
}
.content-b-right {
  width: 330px;
  float: right;
  height: 864px;
}
.content-b-left-top {
  width: 827px;
  height: 40px;
  padding-left: 35px;
  font-size: 16px;
  color: #008cd6;
  line-height: 40px;
  border-bottom: 1px solid #d2d2d2;
  background-image: url("../assets/image/lcs_img/lcs_bg.png");
  background-position: 10px -498px;
  background-repeat: no-repeat;
}
.content-b-right-top {
  width: 294px;
  height: 40px;
  font-size: 16px;
  padding-left: 36px;
  line-height: 40px;
  border-bottom: 1px solid #d2d2d2;
  color: #008cd6;
  background-image: url("../assets/image/lcs_img/lcs_bg.png");
  background-position: 10px -663px;
  background-repeat: no-repeat;
}
.content-b-left-top-ul {
  width: 860px;
  height: 285px;
  margin: 17px 1px 1px 1px;
  border-bottom: 1px dashed #ccc;
  padding: 0;
}
.content-b-left-top-ul li {
  list-style: none;
  float: left;
  width: 140px;
  height: 267px;
  padding: 0 38px 0 37px;
  // background-color: #008cd6;
}
.content-b-left-top-ul li a {
  display: block;
  text-decoration: none;
  color: #666;
}
.content-b-left-top-ul li a:hover {
  text-decoration: underline;
  color: #cc0000;
}
.content-b-left-top-ul li a > img {
  display: block;
  width: 142px;
  height: 192px;
  background-color: #008cd6;
}
.content-b-left-top-ul li a > span {
  display: block;
  line-height: 22px;
  height: 44px;
  margin-top: 8px;
  font-size: 14px;
  overflow: hidden;
}
.content-b-left-top-ul li p {
  width: 140px;
  height: 13px;
  padding-top: 10px;
  color: #dbdbdb;
  margin: 0;
  text-align: center;
  font-size: 1px;
}
.content-b-left-top-ul li p i {
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #b2dcf3;
}
.content-b-left-top-ul-a {
  width: 860px;
  height: 160px;
  margin: 17px 1px 0 1px;
  // background-color: #b2dcf3;
  padding: 0;
}
.content-b-left-top-ul-a li {
  position: relative;
  width: 376px;
  height: 24px;
  padding-left: 44px;
  margin-bottom: 8px;
  list-style: none;
  float: left;
  // background-color: #008cd6;
}
.content-b-left-top-ul-a li span {
  display: block;
  width: 325px;
  height: 24px;
}
.content-b-left-top-ul-a li span > a {
  color: #333333;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
}
.content-b-left-top-ul-a li em {
  position: absolute;
  left: 15px;
  // top: 0px;
  background-color: #666;
  display: block;
  width: 20px;
  height: 24px;
  background-image: url("../assets/image/lcs_img/lcs_bg.png");
  background-position: -231px -564px;
  background-repeat: no-repeat;
}
.content-b-left-top-ul-a li span > a:hover {
  text-decoration: underline;
  color: #000;
}
.content-b-left-top-ul-a li i {
  position: absolute;
  // width: 20px;
  height: 24px;
  line-height: 24px;
  color: #a3a3a3;
  font-size: 12px;
  font-style: normal;
  // background-color: #333;
  top: 0px;
  right: 0px;
}
.content-b-right-top-d ul {
  width: 308px;
  height: 60px;
  margin: 17px 11px 0 11px;
  // background-color: #008cd6;
  padding: 0;
}
.content-b-right-top-d ul li {
  list-style: none;
  width: 140px;
  height: 60px;
  padding: 0 7px 0 7px;
  float: left;
}
.content-b-right-top-f {
  display: block;
  width: 80px;
  height: 60px;
  padding: 0 13px 0 47px;
  background-image: url("../assets/image/lcs_img/lcs_bg.png");
  background-position: 10px -589px;
  background-repeat: no-repeat;
}
.content-b-right-top-m{
  display: block;
  width: 80px;
  height: 60px;
  padding: 0 13px 0 47px;
  background-image: url("../assets/image/lcs_img/lcs_bg.png");
  background-position: -140px -589px;
  background-repeat: no-repeat;
}
</style>