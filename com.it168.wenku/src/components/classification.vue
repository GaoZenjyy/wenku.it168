<template>
  <el-container>
    <!-- <el-main> -->
    <el-container>
      <el-main>
        <el-row>
          <el-col class="main-border">
            <div class="img25"></div>
            <div class="grid-content bg-purple-dark">筛选项</div>
          </el-col>
        </el-row>

        <el-row :gutter="16" v-for="item in (this.classificationList)" :key="item.id">
          <el-col :span="12">
            <div class="grid-content bg-purple jsfl">{{item.classify_name}}</div>
          </el-col>

          <el-col :span="18">
            <!-- <el-row > -->
            <ul class="qbfl" v-for="item2 in (item.children)" :key="item2.id">
              <!-- <el-col> -->
              <li @click="aClick(item2)">{{item2.attribute_name}}</li>
              <!-- </el-col> -->
            </ul>
            <div class="child-nav" v-if="toggleChild">
              <!-- 此处填入 子选项 -->
              <a
                href="javascript:;"
                v-for="(item, index) in childArr"
                :key="index"
              >{{item.sub_name}}</a>
            </div>
            <!-- </el-row> -->
          </el-col>

          <!-- <ul class="qbfl1" v-for="item3 in item2.children" :key="item3.id">
            <li>{{item3.sub_name}}</li>
          </ul>-->
        </el-row>

        <el-row>
          <el-col class="main-border">
            <div class="img254"></div>
            <div class="grid-content bg-purple-dark">
              相关文档
              <div class="boxdocument">
                <span>售价</span>
                <span>浏览量</span>
                <span>上传日期</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <table style="width: 100%">
            <tr class="filerow" v-for="item in correlationlist" :key="item.id">
              <div class="filerowbox">
                <em v-if="item.formatName=='PDF'" class="doc_conent pdf"></em>
                <em v-else-if="item.formatName=='DOC'" class="doc_conent doc"></em>
                <em v-else-if="item.formatName=='PPT'" class="doc_conent ppt"></em>
                <em v-else-if="item.formatName=='PPTX'" class="doc_conent ppt"></em>
                <em v-else-if="item.formatName=='DOCX'" class="doc_conent doc"></em>
                <td class="filename">
                  <p>
                    <a
                      class="filenamea"
                      href="javascirpt:;"
                      @click="getId(item.id)"
                    >{{item.file_name}}</a>
                  </p>
                  <span>标签：</span>
                  <a class="spana" href="javascirpt:;">{{item.file_label}}&nbsp;&nbsp;&nbsp;&nbsp;</a>
                  <span>分类：</span>
                  <a
                    class="spana"
                    href="javascirpt:;"
                  >{{item.technologyName}}&nbsp;&nbsp;&nbsp;&nbsp;</a>
                  <span>贡献者：</span>
                  <a class="spana" href="javascirpt:;">{{item.file_author}}</a>
                </td>
                <td class="fileprice">{{item.file_price}}金币</td>
                <td class="filebrowse">{{item.file_browse}}</td>
                <td class="filetime">{{item.file_time|dateFormats}}</td>
              </div>
            </tr>
          </table>
          <el-pagination
            background
            layout="prev,sizes, pager, next,total,jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="queryinfor.page"
            :total="total"
            :page-sizes="[10,15]"
            :page-size="queryinfor.per_page"
          ></el-pagination>
        </el-row>
      </el-main>
      <el-aside width="330px">
        <el-row class="main-border1">
          <el-col>
            <div class="img251"></div>
            <div class="grid-content bg-purple-dark textzt">扫描下载APP</div>
          </el-col>
        </el-row>
        <el-row>
          <img class="qrcode" src="../assets/image/it168/ia_100000001.jpg" alt />
        </el-row>
        <el-row class="main-border1">
          <el-col>
            <div class="img252"></div>
            <div class="grid-content bg-purple-dark textzt">做任务 赢金币</div>
          </el-col>
        </el-row>
        <el-row class="dotasks">
          <div class="grid-content bg-purple reze">
            <span class="reze-span">完成认证</span>
          </div>
          <div class="grid-content bg-purple qida">
            <span class="reze-span">一键签到</span>
          </div>
          <div class="renwu_box row-box">
            <span class="boxspan">任务奖励说明：</span>
            <br />1、 每次签到，经验+2；为了鼓励签到，每连续签到10
            天，再加送10个金币。
            <br />2、完成认证审核通过后，获得系统奖励的200金币。
          </div>
        </el-row>
        <el-row>
          <el-col>
            <div class="img253"></div>
            <div class="grid-content bg-purple-dark textzt">合作机构</div>
          </el-col>
          <el-col class="img02">
            <img src="../assets/image/it168/ia_100000002.png" alt />
            <span class="spanimg"></span>
          </el-col>
          <el-col>
            <ul class="amount">
              <li>
                <i>53</i>文档量
              </li>
              <li>
                <i>54687</i>浏览量
              </li>
              <li>
                <i>61</i>下载量
              </li>
            </ul>
            <!-- <div class="grid-content bg-purple-dark textzt"></div> -->
          </el-col>
          <!-- <el-col>
            <div class="grid-content bg-purple-dark textzt1"></div>
          </el-col>-->
          <el-col>
            <div
              class="renwu_box row-box"
            >锐捷网络股份有限公司，中国数据通信解决方案领导品牌。多年来，我们致力于扎根行业、深入场景进行产品设计和创新，为各行业用户构建端到端的解决方案，为客户网络创造新价值。</div>
          </el-col>
          <el-col>
            <div class="grid-content bg-purple reze1"></div>
          </el-col>
        </el-row>
      </el-aside>
    </el-container>
    <!-- </el-main> -->
  </el-container>
</template>
<script>
import { log } from "util";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      classificationList: [],
      correlationlist: [],
      //子菜单切换变量
      toggleChild: false,
      childArr: [],
      total: 0,
      queryinfor: {
        query: "",
        page: 1,
        per_page: 10
      }
    };
  },
  created() {
    this.technical();
    this.documents();
  },
  methods: {
    ...mapMutations(["getid"]),
    // 跳转到 李远东页面
    getId(id) {
      // console.log(id);
      this.$store.commit("getId", id);
      this.$router.push("/details");
    },
    // 获取筛选项
    async technical() {
      const { data: res } = await this.$http.get("screen");
      // console.log(res);
      this.classificationList = res.data;
      // console.log(this.classificationList);
    },
    // 获取相关文档
    async documents() {
      const { data: res } = await this.$http.get("elated/documents", {
        params: this.queryinfor
      });
      // console.log(res);
      this.correlationlist = res.data;
      this.total = res.total;
    },
    handleSizeChange(size) {
      // console.log(size);

      this.queryinfor.per_page = size;
      this.documents();
    },
    handleCurrentChange(newnum) {
      // console.log(newnum);

      this.queryinfor.page = newnum;
      this.documents();
    },
    // 给筛选项一个点击事件
    aClick(item) {
      // console.log(item);
      // 判断是否有子选项
      if ("children" in item) {
        this.toggleChild = true;
        this.childArr = item.children;
      } else {
        this.childArr = [];
        this.toggleChild = false;
      }
    }
  }
};
</script>
<style scoped>
el-container {
  margin: 0 auto;
  width: 1200px;
  height: 100%;
}
/* el-main {
  min-width: 862px;
  padding: 0px;
} */
.main-border {
  border-bottom: 1px solid #d2d2d2;
  line-height: 40px;
  width: 850px;
  margin-top: -20px;
  margin-left: -10px;
  color: #008cd6;
}
.main-border1 {
  border-bottom: 1px solid #d2d2d2;
  line-height: 40px;
}
/* 二维码 */
.qrcode {
  width: 330px;
  height: 195px;
}
/* 扫描下载APP字体样式 */
.textzt {
  font-size: 16px;
  /* padding-left: 36px; */
  line-height: 40px;
  border-bottom: 1px solid #d2d2d2;
  /* background-position: 10px -926px; */
  color: #008cd6;
}
/* 任务 */
.dotasks {
  /* position: relative; */
  color: white;
}
/* 奖励说明 */
.row-box {
  font-size: 12px;
  color: #575252;
  margin: 10px;
}
.boxspan {
  font-size: 14px;
  color: #333;
}
/* 认证 */
.reze {
  /* left: 10px;
  top: 10px; */
  position: relative;
  margin: 10px;
  padding: 10px;
  width: 129px;
  height: 60px;
  float: left;
  background-image: url("../assets/image/it168/ia_100000025.png");
  background-repeat: no-repeat;
  background-size: 348px;
  background-position: 0px -620px;
}
.reze-span {
  /* margin: 10px 5px 10px 5px; */
  position: absolute;
  right: 15px;
  top: 20px;
  font-size: 20px;
}
/* 相关文档售价 */
.boxdocument {
  float: right;
  color: black;
}
.boxdocument span {
  margin: 20px;
  font-size: 12px;
}
/* 签到 */
.qida {
  position: relative;
  width: 129px;
  height: 60px;
  margin: 10px 5px;
  padding: 10px;
  float: right;
  background-image: url("../assets/image/it168/ia_100000025.png");
  background-repeat: no-repeat;
  background-size: 348px;
  background-position: -150px -620px;
}
/* 扫码图标 */
.img25 {
  width: 25px;
  height: 40px;
  float: left;
  background-image: url("../assets/image/it168/ia_100000025.png");
  background-repeat: no-repeat;
  background-size: 348px;
  background-position: 0px -324px;
}
/* 筛选项图标 */
.img251 {
  width: 25px;
  height: 40px;
  float: left;
  background-image: url("../assets/image/it168/ia_100000025.png");
  background-repeat: no-repeat;
  background-size: 348px;
  background-position: 0px -978px;
}
/* 做任务图标 */
.img252 {
  width: 25px;
  height: 40px;
  float: left;
  background-image: url("../assets/image/it168/ia_100000025.png");
  background-repeat: no-repeat;
  background-size: 348px;
  background-position: 0px -700px;
}
/* 合作机构 */
.img253 {
  width: 25px;
  height: 40px;
  float: left;
  background-image: url("../assets/image/it168/ia_100000025.png");
  background-repeat: no-repeat;
  background-size: 348px;
  background-position: 0px -752px;
}
/* 相关文档 */
.img254 {
  width: 25px;
  height: 40px;
  float: left;
  background-image: url("../assets/image/it168/ia_100000025.png");
  background-repeat: no-repeat;
  background-size: 348px;
  background-position: 0px -526px;
}
/* 认证机构 */
.spanimg {
  width: 96px;
  height: 40px;
  right: 40px;
  top: 60px;
  position: absolute;
  /* float: right; */
  background-image: url("../assets/image/it168/ia_100000025.png");
  background-repeat: no-repeat;
  background-size: 348px;
  background-position: 0px -866px;
}

/* 锐捷 */
.img02 {
  height: 70px;
  overflow: hidden;
  padding: 5px 0 0 45px;
}
.img02 img {
  width: 140px;
  height: 70px;
}
/* 申请合作机构入驻 */
.reze1 {
  /* position: relative; */
  /* margin: 10px;
  padding: 10px; */
  width: 330px;
  height: 40px;
  /* float: left; */
  background-image: url("../assets/image/it168/ia_100000025.png");
  background-repeat: no-repeat;
  background-size: 348px;
  background-position: 0px -906px;
}
/* 浏览量 */
.amount {
  border-bottom: 2px dashed #d2d2d2;
  border-top: 1px solid #d2d2d2;
  height: 40px;
  margin: 17px auto 0;
  width: 320px;
  padding: 11px 0;
  list-style: none;
}
.amount li {
  float: left;
  border-right: 1px solid #d2d2d2;
  width: 105px;
  font-size: 14px;
  height: 40px;
  text-align: center;
}
.amount li:last-child {
  border: none;
}
.amount li i {
  font-size: 14px;
  color: #f00;
  display: block;
  padding: 5px 0 3px;
}
/* 技术分类 */
.jsfl {
  color: #008cd6;
}
/* 分类分支 */
.qbfl {
  list-style: none;
  font-size: 14px;
  display: inline-block;
}
.qbfl1 {
  list-style: none;
  font-size: 14px;
  /* display: none; */
}
.qbfl li:hover {
  background-color: #00afd6;
  color: white;
  cursor: pointer;
}
.qbfl li:active {
  background-color: #00afd6;
  color: white;
  cursor: pointer;
}

/* 子菜单 */
.child-nav {
  margin: 10px 0 0 8px;
  background: #f3f3f3;
  width: 700px;
  height: 27px;
  border: 1px solid #ccc;
  border-radius: 5px;
  clear: both;
  overflow: hidden;
  padding: 0 0 5px 10px;
}

.child-nav a {
  float: left;
  white-space: nowrap;
  line-height: 22px;
  padding: 0 5px;
  height: 22px;
  margin: 5px 10px 0 0;
  text-decoration: none;
  outline: none;
  color: #666;
}
.filerow {
  position: relative;
}
/* 文章行样式 */
.filerowbox {
  position: relative;
  border-bottom: 1px dashed #ccc;
}
/* 文章名称 */
.filenamea {
  font-size: 14px;
  color: #333;
  text-decoration: none;
  margin-left: 15px;
}
.filenamea:hover {
  font-size: 14px;
  color: #c00;
  text-decoration: underline;
}
.filename {
  width: 610px;
}
/* 文档标签样式 */
.filename span {
  font-size: 12px;
  color: #999;
}
.spana {
  font-size: 12px;
  color: #999;
  text-decoration: none;
}
.spana:hover {
  font-size: 12px;
  color: #c00;
  text-decoration: underline;
}
/* 售价样式 */
.fileprice {
  font-size: 12px;
  text-align: center;
  width: 50px;
  color: #e48b00;
}
/* 浏览量样式 */
.filebrowse {
  font-size: 12px;
  width: 70px;
  color: #008cd6;
  text-align: center;
}
.filetime {
  font-size: 12px;
  width: 78px;
  text-align: right;
  color: #999;
}
.doc_conent {
  background-image: url("../assets/image/it168/ia_100000025.png");
  width: 20px;
  height: 24px;
  position: absolute;
  background-repeat: no-repeat;
  background-size: 348px;
  top: 18px;
  left: -10px;
}
.pdf {
  background-position: -245px -598px;
}
.doc {
  background-position: -134px -598px;
}
.ppt {
  background-position: -1px -598px;
}
.pptx {
  background-position: -1px -598px;
}
</style>