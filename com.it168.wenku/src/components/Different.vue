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
                  <a href="javascript:;">{{item.attribute_name}}</a>
                  <!-- <router-link :to="{path:'/classification'}">{{item.attribute_name}}</router-link> -->
                  <!-- <a href="#"></a> -->
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
      <!-- 热门文档 -->
      <div class="content-b-left">
        <div class="content-b-left-top">热门文档</div>
        <ul class="content-b-left-top-ul">
          <!-- <template slot-scope="scoped">{{scoped.row}}</template> -->
          <li v-for="item in listWenDang" :key="item.id">
            <!-- <div v-for="(srcs,indexs) in simages" :key="indexs"> -->
            <!-- {{item.id}} -->
            <a href="javascript:;">
              <!-- {{srcs}} -->
              <img :src="item.file_image" alt />
              <span>{{item.file_name}}</span>
            </a>
            <!-- </div> -->

            <p>
              <i></i>
              {{item.file_browse}}人阅读
            </p>
          </li>
        </ul>
        <!-- <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>-->
        <ul class="content-b-left-top-ul-a clearfix">
          <li v-for="item in listWenDangXz" :key="item.id" @click="getid(item.id)">
            <!-- {{item.id}} -->
            <em></em>
            <span>
              <a href="javascript:;">{{item.file_name}}</a>
            </span>
            <i>{{item.file_download}}下载</i>
          </li>
          <!-- <li></li> -->
        </ul>
      </div>
      <!--做任务 赢金币  -->
      <div class="content-b-right">
        <!-- 做任务 赢金币 头部 -->
        <div class="content-b-right-tuobu">
          <div class="content-b-right-top">做任务 赢金币</div>
          <div class="content-b-right-top-d">
            <ul class="clearfix">
              <li>
                <a href class="content-b-right-top-f">完成认证</a>
              </li>
              <li>
                <a href class="content-b-right-top-m">一键签到</a>
              </li>
            </ul>
          </div>
          <div class="content-b-right-top-n">
            <span>任务奖励和说明</span>1、 每次签到，经验+2；为了鼓励签到，每连续签到10
            天，再加送10个金币。
            <br />2、完成认证审核通过后，获得系统奖励的200金币。
          </div>
        </div>
        <!-- 做任务 赢金币 中间身体 -->
        <div class="content-b-right-zhongjian">
          <div class="content-b-right-zhongjian-a">合作机构</div>
          <div class="content-b-right-zhongjian-b clearfix">
            <img src="../assets/image/gaoy/ruijie1.png" alt />
            <span></span>
          </div>
          <!-- 文档量 -->
          <ul class="content-b-right-zhongjian-c clearfix">
            <li class="wdl">
              <i>53</i>
              文档量
            </li>
            <li class="wdl">
              <i>54747</i>
              浏览量
            </li>
            <li>
              <i>61</i>
              下载量
            </li>
          </ul>
          <div
            class="content-b-right-zhongjian-d"
          >锐捷网络股份有限公司，中国数据通信解决方案领导品牌。多年来，我们致力于扎根行业、深入场景进行产品设计和创新，为各行业用户构建端到端的解决方案，为客户网络创造新价值。</div>
          <a href="javascript:;" class="sqhzjg"></a>
        </div>
        <!-- 下载动态 -->
        <div class="content-b-right-jiaobu">
          <div class="content-b-right-jiaobu-a">下载动态</div>
          <div class="content-b-right-jiaobu-b">
            <ul>
              <li v-for="item in downloads" :key="item.id">
                <a href="javascript:;">{{item.file_author}}</a>
                下载了
                <a href="javascript:;">{{item.file_name}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容三-->
    <div class="content-c">
      <div class="content-b-left">
        <div class="content-c-left-top">最新上传</div>
        <ul class="content-b-left-top-ul">
          <li v-for="(item,index) in listWenDangs" :key="index">
            <!-- <div v-for="(srcs,indexs) in simages" :key="indexs"> -->
            <a href="javascript:;">
              <!-- {{srcs}} -->
              <img :src="item.file_image" alt />
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
          <li v-for="item in listWenDangXzs" :key="item.id">
            <em></em>
            <span>
              <a href="javascript:;">{{item.file_name}}</a>
            </span>
            <i>{{item.file_download}}下载</i>
          </li>
          <!-- <li></li> -->
        </ul>
      </div>
    </div>
    <!-- 内容四 -->
    <div class="content-d">
      <div class="content-d-top" style="line-height: 25px">会议专辑</div>
      <ul class="clearfix">
        <li v-for="(item,index) in listConference" :key="index">
          <a href="javascript:;">
            <img :src="item.meeting_image" alt />
            <span>{{item.meeting_title}}</span>
          </a>
        </li>
        <!-- <li></li> -->
      </ul>
    </div>
    <!-- 内容四 -->
    <div class="content-d">
      <div class="content-d-top">精品文集</div>
      <ul class="clearfix">
        <li v-for="(item,index) in listCollected" :key="index">
          <a href="javascript:;">
            <img :src="item.meeting_image" alt />
            <span>{{item.meeting_title}}</span>
          </a>
        </li>
        <!-- <li></li> -->
      </ul>
    </div>
  </div>
</template>
<script>
import bus from "./bus.js";
export default {
  data() {
    return {
      numbers: 100,
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
      // simages: [
      //   {
      //     url: "#",
      //     img: require("../assets/image/gaoy/wendangxz1.jpg")
      //   },
      //   {
      //     url: "#",
      //     img: require("../assets/image/gaoy/wendangxz2.jpg")
      //   },
      //   {
      //     url: "#",
      //     img: require("../assets/image/gaoy/wendangxz3.jpg")
      //   },
      //   {
      //     url: "#",
      //     img: require("../assets/image/gaoy/wendangxz4.jpg")
      //   }
      // ],
      // 热门文档下载
      listWenDangXz: [],
      // 最新上传
      listWenDangs: [],
      // 最新上传 图片
      // simagesred: [
      //   {
      //     url: "#",
      //     img: require("../assets/image/gaoy/red1.jpg")
      //   },
      //   {
      //     url: "#",
      //     img: require("../assets/image/gaoy/red2.jpg")
      //   },
      //   {
      //     url: "#",
      //     img: require("../assets/image/gaoy/red3.jpg")
      //   },
      //   {
      //     url: "#",
      //     img: require("../assets/image/gaoy/red4.jpg")
      //   }
      // ],
      // 最新上传 下载
      listWenDangXzs: [],
      // 会议专辑
      listConference: [],

      // 会议图片
      // ConferenceImage: [
      //   {
      //     url: "#",
      //     img: require("../assets/image/gaoy/huiyi1.jpg")
      //   },
      //   {
      //     url: "#",
      //     img: require("../assets/image/gaoy/huiyi2.jpg")
      //   }
      // ],
      // 精品文集
      listCollected: [],
      // 精品文集 图片
      // collectedimg: [
      //   {
      //     url: "#",
      //     img: require("../assets/image/gaoy/huiyi3.jpg")
      //   },
      //   {
      //     url: "#",
      //     img: require("../assets/image/gaoy/huiyi4.jpg")
      //   }
      // ],
      // 下载
      downloads: []
    };
  },
  methods: {
    async getid(id) {
      // console.log(id);
      const { data: res } = await this.$http.get("/mm", { params: { id: id } });
      let idd = res.data[0].id;
      bus.$emit("hit", idd);
      //   // console.log(id);
      // console.log(idd);
      this.$router.push("/details");
    },
    // getid(id) {
    //   // console.log(id);
    //   bus.$emit("hit", id);
    //   // console.log(id);

    //   this.$router.push("/classification");
    //   // location.href = "/classification";
    // },
    setget(id) {},
    // 技术分类
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
    // 热门文档
    async getListWenDang() {
      const { data: res } = await this.$http.get("popular/document/read");
      // console.log(res);
      this.listWenDang = res.data;
      // console.log(this.listWenDang);
    },
    // 热门文档下载
    async getListWenDangxz() {
      const { data: res } = await this.$http.get("/popular/document/download");
      // console.log(res);
      this.listWenDangXz = res.data;
    },
    // 最新上传
    async getListWenzusc() {
      const { data: res } = await this.$http.get("/latest/upload/read");
      // console.log(res);
      this.listWenDangs = res.data;
    },
    // 最新上传 下载
    async getListwedXz() {
      const { data: res } = await this.$http.get("/latest/upload/download");
      // console.log(res);
      this.listWenDangXzs = res.data;
    },
    // 会议专辑
    async getListconference() {
      const { data: res } = await this.$http.get("/conference/albums");
      // console.log(res);
      this.listConference = res.data;
    },
    // 会议图片
    async getcollectedimg() {
      const { data: res } = await this.$http.get("/conference/albums");
      // console.log(res);
      this.listCollected = res.data;
    },
    async getfenlie() {
      const { data: res } = await this.$http.get("elated/documents");
      // console.log(res);
      this.downloads = res.data;
    }
  },
  created() {
    this.getListdata();
    this.getListWenDang();
    this.getListWenDangxz();
    this.getListWenzusc();
    this.getListwedXz();
    this.getListconference();
    this.getcollectedimg();
    this.getfenlie();
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
.content-c {
  width: 100%;
  height: 541px;
  padding-top: 12px;
  padding-bottom: 20px;
}
.content-c-left-top {
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
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  display: block;
  width: 80px;
  height: 60px;
  padding: 0 13px 0 47px;
  background-image: url("../assets/image/lcs_img/lcs_bg.png");
  background-position: 0px -589px;
  background-repeat: no-repeat;
  text-decoration: none;
  color: #fff;
}
.content-b-right-top-m {
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  display: block;
  width: 80px;
  height: 60px;
  padding: 0 13px 0 47px;
  background-image: url("../assets/image/lcs_img/lcs_bg.png");
  background-position: -140px -589px;
  background-repeat: no-repeat;
  text-decoration: none;
  color: #fff;
}
.content-b-right-top-n {
  width: 294px;
  height: 82px;
  padding: 10px 18px 10px 18px;
  font-size: 12px;
}
.content-b-right-top-n span {
  width: 294px;
  height: 20px;
  display: block;
  font-size: 14px;
  padding-bottom: 2px;
  color: #333;
}
.content-b-right-tuobu {
  width: 330px;
  height: 220px;
  padding-bottom: 20px;
}
.content-b-right-zhongjian {
  width: 330px;
  height: 349px;
  padding-bottom: 20px;
}
.content-b-right-zhongjian-a {
  width: 294px;
  height: 40px;
  padding-left: 36px;
  border-bottom: 1px solid #d2d2d2;
  font-size: 16px;
  line-height: 40px;
  background-image: url("../assets/image/lcs_img/lcs_bg.png");
  background-position: 10px -713px;
  background-repeat: no-repeat;
  color: #008cd6;
}
.content-b-right-zhongjian-b {
  width: 284px;
  height: 70px;
  padding: 17px 0 0 45px;
}
.content-b-right-zhongjian-b img {
  float: left;
  width: 140px;
  height: 70px;
  margin-right: 10px;
}
.content-b-right-zhongjian-b span {
  float: left;
  width: 90px;
  height: 30px;
  margin-top: 20px;
  background-image: url("../assets/image/lcs_img/lcs_bg.png");
  background-position: 0px -828px;
  background-repeat: no-repeat;
}
.content-b-right-zhongjian-c {
  width: 320px;
  height: 40px;
  margin: 17px 5px 0 5px;
  padding: 11px 0 11px 0;
  border-bottom: 1px dashed #d2d2d2;
  border-top: 1px solid #d2d2d2;
}
.content-b-right-zhongjian-c li {
  list-style: none;
  width: 106px;
  height: 40px;
  float: left;
  text-align: center;
  font-size: 10px;
}
.wdl {
  border-right: 1px solid #d2d2d2;
}
.content-b-right-zhongjian-c li i {
  font-size: 14px;
  color: #f00;
  display: block;
  padding: 2px 0 3px;
  font-style: normal;
}
.content-b-right-zhongjian-d {
  width: 294px;
  height: 80px;
  font-size: 12px;
  line-height: 20px;
  color: #666;
  padding: 10px 18px 10px 18px;
}
.sqhzjg {
  display: block;
  width: 330px;
  height: 40px;
  // background-color: #008cd6;
  color: #fff;
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  font-size: 18px;
  background-image: url("../assets/image/lcs_img/lcs_bg.png");
  background-position: 0px -859px;
  background-repeat: no-repeat;
}
.content-b-right-jiaobu {
  width: 330px;
  height: 255px;
  // padding-bottom: 20px;
}
.content-b-right-jiaobu-a {
  width: 294px;
  height: 40px;
  padding-left: 36px;
  border-bottom: 1px solid #d2d2d2;
  font-size: 16px;
  line-height: 40px;
  background-image: url("../assets/image/lcs_img/lcs_bg.png");
  background-position: 10px -764px;
  background-repeat: no-repeat;
  color: #008cd6;
}
.content-b-right-jiaobu-b {
  width: 330px;
  height: 160px;
  margin: 17px 0;
}
.content-d {
  width: 862px;
  height: 211px;
  padding-bottom: 20px;
}
// .content-d-top-one{
//   line-height: 0px;
// }
.content-d-top {
  width: 827px;
  height: 40px;
  padding-left: 35px;
  font-size: 16px;
  color: #008cd6;
  line-height: 40px;
  // text-align: center;
  border-bottom: 1px solid #d2d2d2;
  background-image: url(/img/lcs_bg.c3182825.png);
  background-position: 10px -498px;
  background-repeat: no-repeat;
}
.content-d ul {
  width: 100%;
  height: 130px;
  margin: 17px 338px 0 0;
  padding: 0 0 5px 0;
  border-bottom: 1px dashed #ccc;
}
.content-d ul li {
  list-style: none;
  float: left;
  width: 360px;
  height: 130px;
  padding: 0 40px 0 30px;
}
.content-d ul li a {
  text-decoration: none;
  color: #000;
}
.content-d ul li a:hover {
  color: #000;
  text-decoration: underline;
}
.content-d ul li img {
  display: block;
  width: 360px;
  height: 90px;
}
.content-d ul li span {
  display: block;
  width: 360px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.content-b-right-jiaobu-b ul {
  padding: 0;
  width: 300px;
  height: 320px;
  margin: 0 15px 0 15px;
  overflow: hidden;
}
.content-b-right-jiaobu-b ul li {
  list-style: none;
  width: 300px;
  height: 32px;
  line-height: 32px;
  padding-left: 20px;
  overflow: hidden;
  font-size: 12px;
  color: #666666;
  background-image: url(/img/lcs_bg.c3182825.png);
  background-position: -321px -602px;
  background-repeat: no-repeat;
}
.content-b-right-jiaobu-b ul li a {
  text-decoration: none;
  color: #666666;
}
.content-b-right-jiaobu-b ul li a:hover {
  text-decoration: underline;
  color: #cf0000;
}
</style>