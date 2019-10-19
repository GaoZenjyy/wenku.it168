<template>
  <div class="details">
    <!-- left-top -->
    <el-col :span="17" class="left">
      <div class="grid-content bg-purple-dark left-top">
        <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">文库首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{library.technology}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{library.sub}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- content-pdf -->
      <div class="pdf-title">
        <div class="details-pdf">
          <!-- 文章名 -->
          <div class="details-pdf-top">
            <div class="details-pdf-top-left">
              <em></em>
              <span>{{library.file_name}}</span>
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
            <a href="javascript:;">{{library.file_author}}</a>
            <span>{{library.file_time | formatDate}}</span>
            <span>下载量：{{library.file_download}}次</span>
            <span>浏览量：{{library.file_browse}}次</span>
          </div>
        </div>
      </div>
      <div class="pdf">
        <!-- pdf控制框 -->
        <div class="pdf-control">
          <a href="javascript:;" class="pdf-pageup">
            上一页
            <i></i>
          </a>
          <a href="javascript:;" class="pdf-pagedown">
            下一页
            <i></i>
          </a>
        </div>
        <!-- pdf展示框 -->
        <div class="pdf-container">
          <canvas v-for="page in pages" :id="'canvas' + page" :key="page"></canvas>
        </div>
        <!-- pdf详情下载框 -->
        <div class="pdf-detailsBox">
          <div class="pdf-detailsBox-left">
            <span>
              大小：
              <i>{{library.file_browse}}</i>
              .
              <i>{{library.file_download}}</i>
              MB
            </span>
            <span>
              所需金币：
              <i>{{library.file_browse}}</i>
            </span>
            <span>
              文档标签：
              <i></i>
            </span>
          </div>
          <div class="pdf-detailsBox-right">
            <a href="javascript:;">
              <div class="pdf-detailsBox-right-one"></div>
            </a>
            <a href="javascript:;">
              <div class="pdf-detailsBox-right-two"></div>
            </a>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="6" class="right">
      <!-- 热门文档 -->
      <div class="right-word">
        <div class="right-word-title-top">
          <span>热门文档</span>
        </div>
        <!-- 文档目录 -->
        <div v-for="(item,index) in documents" :key="index" class="right-word-content">
          <div class="right-word-content-title">
            <i></i>
            <a href="javascript:;">{{item.file_name}}</a>
          </div>
          <div class="right-word-content-details">
            <span>
              阅读：
              <span>{{item.file_browse}}</span>
            </span>
            <span class="right-word-content-details-x">
              下载：
              <span>{{item.file_download}}</span>
            </span>
          </div>
        </div>
      </div>
      <!-- 相关推荐 -->
      <div class="right-word">
        <div class="right-word-title-bottom">
          <span>相关推荐</span>
        </div>
        <!-- 文档目录 -->
        <div v-for="(item1,index) in recommendations" :key="index" class="right-word-content">
          <div class="right-word-content-title">
            <i></i>
            <a href="javascript:;">{{item1.file_name}}</a>
          </div>
          <div class="right-word-content-details">
            <span>
              阅读：
              <span>{{item1.file_browse}}</span>
            </span>
            <span class="right-word-content-details-x">
              下载：
              <span>{{item1.file_download}}</span>
            </span>
          </div>
        </div>
      </div>
    </el-col>
  </div>
</template>
<script>
// pdfjs-dist
import PDF from "pdfjs-dist";
import bus from "./bus.js";
PDF.disableWorker = true;
export default {
  data() {
    return {
      dataList: "",
      // 文档
      library: [],
      // 热门文档
      documents: [],
      // 相关推荐
      recommendations: [],
      // pdfjs-dist
      width: 100,
      pdfDoc: null,
      pages: 0,
      // 文件路径
      pdfUrl:''
    };
  },
  methods: {
    // 获取文件数据
    async getLibrary() {
      const { data: res } = await this.$http.get("library", {
        params: { id: this.$store.state.age}
      });
      // console.log(res);
      this.library = res.data;
      console.log(this.library);
    },
    // 获取热门文档
    async getDocuments() {
      const { data: res } = await this.$http.get("/popular/documents");
      // console.log(res);
      this.documents = res.data;
      // console.log(this.documents)
    },
    // 获取相关推荐
    async getRecommendations() {
      const { data: res } = await this.$http.get("/recommendations");
      this.recommendations = res.data;
    },
    // 收藏切换
    changeCollection() {
      let token = window.sessionStorage.getItem("token");
      if (token !== null) {
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
      } else {
        alert("请登录");
        // 跳转到登录页
        this.$router.push('/login');
      }
    },
    // pdfjs-dist
    loadFile(url) {
      PDF.getDocument(url).then(pdf => {
        this.pdfDoc = pdf;
        // console.log(111);
        this.pages = this.pdfDoc.numPages;
        this.$nextTick(() => {
          this.renderPage(1);
        });
      });
    },
    // 渲染pdf
    renderPage(num) {
      this.pdfDoc.getPage(num).then(page => {
        let canvas = document.getElementById("canvas" + num);
        let ctx = canvas.getContext("2d");
        let dpr = window.devicePixelRatio || 1; // 设备像素比
        let bsr =
          ctx.webkitBackingStorePixelRatio ||
          ctx.mozBackingStorePixelRatio ||
          ctx.msBackingStorePixelRatio ||
          ctx.oBackingStorePixelRatio ||
          ctx.backingStorePixelRatio ||
          1; // 浏览器在渲染canvas之前会用几个像素来来存储画布信息,类似img
        let ratio = dpr / bsr;
        let viewport = page.getViewport(1.5);
        canvas.width = viewport.width * ratio; // 画布大小,默认值是width:300px,height:150px
        canvas.height = viewport.height * ratio;
        canvas.style.width = viewport.width + "px"; // 画布的框架大小
        canvas.style.height = viewport.height + "px";
        let renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };
        page.render(renderContext);
        if (this.pages > num) {
          this.renderPage(num + 1);
        }
      });
    },
    // 处理pdf文件路径
    pdfUrlPush(){
      let pdfNum = Math.floor(Math.random() * 8);
      // console.log(pdfNum);
      this.pdfUrl = '/pdfFile/pdf-' + pdfNum + '.pdf';
      console.log(this.pdfUrl);
    },
    pdfUpFile(){
      
    },
    pdfDownFile(){}
  },
  created() {
    this.getLibrary();
    this.getDocuments();
    this.getRecommendations();
    this.pdfUrlPush();
    this.loadFile(this.pdfUrl);
  },
  mounted() {},
  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    }
  }
};
</script>

<style lang="less" scoped>
.details {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    a {
      text-decoration: none;
    }
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
    .pdf {
      width: 800px;
      height: 850px;
      border: 1px solid #999;
      .pdf-control {
        width: 800px;
        height: 50px;
        background-color: #f9f9f9;
        overflow: hidden;
        .pdf-pageup {
          position: relative;
          float: left;
          width: 50%;
          height: 60px;
          color: #666;
          text-align: center;
          line-height: 45px;
          border-right: 1px solid #999;
          box-sizing: border-box;
          i {
            position: absolute;
            left: 245px;
            top: 10px;
            display: inline-block;
            width: 25px;
            height: 25px;
            background-image: url("../assets/image/lcs_img/lcs_bg.png");
            background-repeat: no-repeat;
            background-position: -270px -992px;
          }
        }
        .pdf-pageup:hover {
          color: #c00;
          text-decoration: underline;
        }
        .pdf-pagedown {
          position: relative;
          float: left;
          width: 50%;
          height: 60px;
          color: #666;
          text-align: center;
          line-height: 45px;
          i {
            position: absolute;
            left: 245px;
            top: 10px;
            display: inline-block;
            width: 25px;
            height: 25px;
            background-image: url("../assets/image/lcs_img/lcs_bg.png");
            background-repeat: no-repeat;
            background-position: -300px -992px;
          }
        }
        .pdf-pagedown:hover {
          color: #c00;
          text-decoration: underline;
        }
      }
      .pdf-container {
        width: 800px;
        height: 700px;
        overflow: auto;
        position: absolute;
        border-bottom: 1px solid #999;
        border-top: 1px solid #999;
        box-sizing: border-box;
      }
      .pdf-detailsBox {
        overflow: hidden;
        margin-top: 700px;
        width: 800px;
        height: 100px;
        .pdf-detailsBox-left {
          float: left;
          width: 55%;
          height: 60px;
          text-align: center;
          line-height: 50px;
          margin-top: 20px;
          border-right: 1px dashed #999;
          box-sizing: border-box;
          span {
            color: #333;
            margin-left: 30px;
          }
        }
        .pdf-detailsBox-right {
          float: left;
          width: 40%;
          height: 60px;
          margin-top: 20px;
          overflow: hidden;
          .pdf-detailsBox-right-one {
            float: left;
            width: 45%;
            height: 60px;
            margin-left: 30px;
            background-image: url("../assets/image/lcs_img/lcs_bg.png");
            background-repeat: no-repeat;
            background-position: 0 -1040px;
          }
          .pdf-detailsBox-right-two {
            float: right;
            width: 45%;
            height: 60px;
            background-image: url("../assets/image/lcs_img/lcs_bg.png");
            background-repeat: no-repeat;
            background-position: 0 -1160px;
          }
        }
      }
    }
  }
  .right {
    .right-word {
      .right-word-title-top {
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
      .right-word-title-bottom {
        margin-top: 15px;
        padding-bottom: 6px;
        font-size: 16px;
        border-bottom: 1px solid #ccc;
        background-image: url("../assets/image/lcs_img/lcs_bg.png");
        background-repeat: no-repeat;
        background-position: 11px -511px;
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
          .right-word-content-details-x {
            margin-left: 40px;
          }
        }
      }
    }
  }
}
</style>