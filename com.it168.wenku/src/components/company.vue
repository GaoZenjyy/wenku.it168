<template>
  <!-- 总体大盒子1 -->
  <div class="box">
    <!-- 中心 -->
    <div class="content-a clearfix">
      <!-- 左边盒子 -->
      <div class="box_left">
        <!-- 上部分 -->
        <div class="box_left_top">
          <img :src="companyDate.image" alt />
          <span class="top_wenzi">{{companyDate.title}}</span>
          <i class="jing"></i>
        </div>
        <!-- 下部分 -->
        <div class="box_left_bottom">
          <p class="bottom_wenzi_one">
            <span class="bottom_wenzi_one-span">机构信息：</span>
            <span class="bottom_wenzi_two-span">{{companyDate.mechanism}}</span>
          </p>

          <p class="bottom_wenzi_two">
            主营业务：
            {{companyDate.business}}
          </p>
        </div>
      </div>

      <!-- 右边盒子 -->
      <div class="box_right">
        <!-- 上部分 -->
        <div class="box_right_top">
          <!-- 内容三个小div -->
          <div class="right_top_one">
            <p class="right_wen">{{companyDate.fileNumber}}</p>
            <p class="right_zi">文档量</p>
          </div>
          <div class="right_top_one">
            <p class="right_wen">{{companyDate.browseNumber}}</p>
            <p class="right_zi">浏览量</p>
          </div>
          <div class="right_top_one_a">
            <p class="right_wen">{{companyDate.downloadNumber}}</p>
            <p class="right_zi">下载量</p>
          </div>
        </div>
        <!-- 下部分 -->
        <div class="box_right_bottom">
          <p>联系人：{{companyDate.contacts}}</p>
          <p>联系电话：{{companyDate.contactsPhone}}</p>
          <p>Email：{{companyDate.email}}</p>
        </div>
      </div>
    </div>
    <!-- 合作机构 -->
    <div class="mechanism">
      <i class="tuijian"></i>
      <p class="tuij">合作机构文档</p>
      <span class="yue">阅读量</span>
      <span class="riqi">上传日期</span>
    </div>

    <!-- 机构文档分类 -->
    <div class="right_box">
      <div class="documents">
        <i class="ments"></i>
        <a href="javascript:;" class="aaa">
          <p class="doc">机构文档分类</p>
        </a>
      </div>
      <!-- 数据内容 -->
      <div class="logis">
        <a href="javascript:;">
          <span class="logisti">2019TechWorl</span>
          <span class="logist">8</span>
        </a>
      </div>
      <div class="logis">
        <a href="javascript:;">
          <span class="logisti">研究报告</span>
          <span class="logist">7</span>
        </a>
      </div>
      <div class="logis">
        <a href="javascript:;">
          <span class="logisti">云安全</span>
          <span class="logist">5</span>
        </a>
      </div>
      <div class="logis">
        <a href="javascript:;">
          <span class="logisti">数据安全</span>
          <span class="logist">3</span>
        </a>
      </div>
      <div class="logis">
        <a href="javascript:;">
          <span class="logisti">物联安全</span>
          <span class="logist">1</span>
        </a>
      </div>
      <div class="logis">
        <a href="javascript:;">
          <span class="logisti">其他</span>
          <span class="logist">0</span>
        </a>
      </div>
    </div>

    <!-- 数据内容 -->
    <div class="logistics" v-for="item in organizationData" :key="item.id">
      <i class="PPT"></i>
      <p class="logisticss">{{item.file_name}}</p>
      <span class="yuedu">{{item.file_browse}}</span>
      <span class="riqis">{{item.file_time | dateFormats}}</span>
    </div>
    <!-- 分页 -->
    <el-pagination
      class="pagination"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagingList.page"
      :page-sizes="[10,15,20 ]"
      :page-size="pagingList.per_page"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 定义数组
      companyDate: [],
      organizationData: [],
      // 分页数据
      pagingList: {
        // 页数
        page: 1,
        // 条数
        per_page: 10
      },
      // 分页默认显示0
      total: 0
    };
  },
  // 方法
  methods: {
    // 写一个函数 查询公司信息
    async companyList() {
      // axios 请求
      const { data: res } = await this.$http.get("/company/information");
      // console.log(res);
      // 把数据放进数组
      this.companyDate = res.data;
      // console.log(this.companyDate.title);
    },
    // 写一个函数 查询合作机构文档
    async organizationList() {
      const { data: res } = await this.$http.get("/partner/documents", {
        params: this.pagingList
      });
      console.log(res);
      this.organizationData = res.data;
      // console.log(this.organizationData);
      // 把分页总条数放进数组
      this.total = res.total;
    },
    handleSizeChange(val) {
      this.pagingList.per_page = val;
      // 调用
      this.organizationList();
    },
    handleCurrentChange(val) {
      this.pagingList.page = val;
      // 调用
      this.organizationList();
    }
  },
  // 生命周期
  created() {
    // 调用
    this.companyList();
    this.organizationList();
  }
};
</script>

<style>
.box {
  overflow-y: hidden;
}
/* 中心 */
.content-a {
  width: 100%;
  height: 207px;
  /* background-color: pink; */
}
/* 清除浮动 */
.clearfix {
  content: "";
  display: block;
  clear: both;
}
/* 左边盒子 */
.box_left {
  width: 860px;
  height: 205px;
  float: left;
  border: 1px solid #d2d2d2;
}

/* 上部分 */
.box_left_top {
  width: 840px;
  height: 80px;
  border-bottom: 1px dashed #dddddd;
  margin-left: 10px;
  margin-top: 10px;
  position: relative;
}
/* 图片 */
.box_left_top img {
  width: 140px;
  height: 70px;
}
/* 文字 */
.top_wenzi {
  font-size: 21px;
  position: absolute;
  top: 20px;
  right: 313px;
}
/* 精灵图 */
.jing {
  display: block;
  width: 120px;
  height: 48px;
  position: relative;
  top: -69px;
  right: -715px;
  background-image: url(../assets/image/lcs_img/lcs_bg.png);
  background-position: 32px -810px;
  background-repeat: no-repeat;
  cursor: pointer;
}
/* 下部分文字 */
.box_left_bottom {
  width: 840px;
  height: 80px;
  /* border: 1px solid red; */
}
.bottom_wenzi_one {
  /* position: relative; */
  font-size: 14px;
  color: #000000;
  line-height: 19px;
  /* text-indent: 1em; */
  padding: 0;
  margin: 5px 0 0 15px;
}
.bottom_wenzi_one_a {
  font-size: 14px;
  color: #000000;
  line-height: 10px;
  text-indent: 6em;
}
.bottom_wenzi_two {
  font-size: 14px;
  color: #000000;
  line-height: 20px;
  text-indent: 1em;
}
/* 右边盒子 */
.box_right {
  width: 330px;
  height: 205px;
  border: 1px solid #d2d2d2;
  background-color: #f3f3f3;
  float: right;
}
/* 上部分右边盒子 */
.box_right_top {
  width: 304px;
  height: 70px;
  border-bottom: 1px dashed #d2d2d2;
  margin-left: 11px;
  margin-top: 20px;
  position: relative;
}
/* 三个小盒子 */
.right_top_one {
  width: 99px;
  height: 50px;
  border-right: 1px solid #d2d2d2;
  float: left;
}
.right_top_one_a {
  width: 99px;
  height: 50px;
  /* border-right: 1px solid #d2d2d2;; */
  float: left;
}
.right_wen {
  font-size: 15px;
  color: #fe0000;
  text-align: center;
  margin-top: 6px;
}

.right_zi {
  font-size: 15px;
  color: #999999;
  text-align: center;
  margin-top: -12px;
}
/* 右边下面文字 00*/
.box_right_bottom p {
  font-size: 15px;
  text-indent: 2em;
  color: #796666;
  line-height: 10px;
}
.mechanism {
  width: 862px;
  height: 40px;
  background-color: #ffffff;
  border-bottom: 1px solid #d3d3d3;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  /* margin-top: -48px; */
  position: relative;
  /* float: left; */
}
/* 合作机构 */
.tuij {
  color: #008cd6;
  text-indent: 2.5em;
  line-height: 40px;
  margin-top: 0px;
}
/* 合作机构图标 */
.tuijian {
  display: block;
  width: 32px;
  height: 28px;
  position: absolute;
  top: 6px;
  left: 13px;
  /* right: 28px; */
  background-image: url(/img/lcs_bg.c3182825.png);
  background-position: 0px -505px;
  background-repeat: no-repeat;
}
.yue {
  position: absolute;
  display: block;
  top: 13px;
  right: 110px;
  font-size: 12px;
  color: #666666;
}
.riqi {
  position: absolute;
  display: block;
  top: 13px;
  right: 9px;
  font-size: 12px;
  color: #666666;
}

/* 物流循环 */
.logistics {
  width: 862px;
  height: 40px;
  background-color: #ffffff;
  border-bottom: 1px dashed #d3d3d3;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  /* margin-top: -48px; */
  position: relative;
}
/* ppt图标 */
.PPT {
  display: block;
  width: 21px;
  height: 26px;
  position: absolute;
  top: 1px;
  left: 13px;
  /* right: 28px; */
  background-image: url(/img/lcs_bg.c3182825.png);
  background-position: 0px -563px;
  background-repeat: no-repeat;
}
/* 文字 */
.logistics {
  color: #333333;
  text-indent: 3em;
  line-height: 30px;
  margin-top: 0px;
  font-size: 15px;
}
/* 阅读量数量 */
.yuedu {
  position: absolute;
  display: block;
  top: 13px;
  right: 115px;
  font-size: 12px;
  color: #008cd9;
  line-height: 10px;
}
/* 上传日期时间 */
.riqis {
  position: absolute;
  display: block;
  top: 13px;
  right: 9px;
  font-size: 12px;
  color: #666666;
  line-height: 10px;
}
.right_box {
  width: 330px;
  height: 300px;
  position: relative;
  float: right;
}
/* 机构文档分类 */
.documents {
  width: 333px;
  height: 40px;
  background-color: #ffffff;
  border-bottom: 1px solid #d3d3d3;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  margin-top: -41px;
  position: relative;
  float: right;
}
/* 机构文档分类文字 */
.doc {
  color: #666666;
  text-indent: 2.5em;
  line-height: 40px;
  margin-top: 0px;
}
.aaa {
  text-decoration: none;
}
.doc:hover {
  text-decoration: underline;
  color: #cd0505;
}
/* 机构分类图标 */
.ments {
  display: block;
  width: 32px;
  height: 28px;
  position: absolute;
  top: 6px;
  left: 13px;
  /* right: 28px; */
  background-image: url(/img/lcs_bg.c3182825.png);
  background-position: 0px -505px;
  background-repeat: no-repeat;
}
/* 内容盒子 */
.logis {
  width: 330px;
  height: 40px;
  border-bottom: 1px dashed #d3d3d3;
}
.logis a {
  text-decoration: none;
}
/* 文字 */
.logisti {
  font-size: 14px;
  color: #999999;
  text-indent: 1em;
  display: inline-block;
  line-height: 40px;
}
.logisti:hover {
  text-decoration: underline;
}
.logist {
  font-size: 13px;
  color: #008cdc;
  display: inline-block;
  line-height: 40px;
  text-indent: 0.5em;
}
.bottom_wenzi_one-span {
  width: 85px;
  position: relative;
  top: -38px;
  height: 0px;
}
.bottom_wenzi_two-span {
  width: 755px;
  display: inline-block;
}
.pagination {
  margin-top: 30px;
  margin-left: 120px;
}
</style>