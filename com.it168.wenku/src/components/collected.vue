<template>
  <div class="words">
    <!-- 文集 -->
    <div class="recomm">文集推荐</div>
    <ul class="wendang_txt">
      <li v-for="item in getUserList" :key="item.id">
        <a href="javascript:;" >
          <img
            :src="item.meeting_image"
            width="360"
            height="90"
            :alt="item.meeting_title"
          />
          <span>{{item.meeting_title}}</span>
        </a>
      </li>

    </ul>
    <ul class="wendang_list4"></ul>
    <!-- 扫描APP -->
    <div class="r2">
      <div class="tit9">扫描下载APP</div>
      <img src="../assets/image/images/words12.png" width="330" height="195" alt />
      <!-- 金币 -->
      <!--做任务 赢金币  -->
      <div class="content-b-right">
        <!-- 做任务 赢金币 头部 -->
        <div class="content-b-right-tuobu">
          <div class="content-b-right-top">做任务 赢金币</div>
          <div class="content-b-right-top-d">
            <ul class="clearfix">
              <li>
                <a href="javascipt:;" class="content-b-right-top-f">完成认证</a>
              </li>
              <li>
                <a href="javascipt:;" class="content-b-right-top-m">一键签到</a>
              </li>
            </ul>
          </div>
          <div class="content-b-right-top-n">
            <span>任务奖励和说明</span>1、 每次签到，经验+2；为了鼓励签到，每连续签到10
            天，再加送10个金币。
            <br />2、完成认证审核通过后，获得系统奖励的200金币。
          </div>
        </div>
      </div>
      <div class="tit7">合作机构</div>
      <div class="hezuo_box">
        <img src="../assets/image/images/words13.png" alt width="140" height="70" />
        <span></span>
      </div>
      <ul class="hezuo_list">
        <li>
          <i>53</i>文档量
        </li>
        <li class="cen">
          <i>54797</i>浏览量
        </li>
        <li>
          <i>61</i>下载量
        </li>
      </ul>
      <div class="renwu_box">
        锐捷网络股份有限公司，中国数据通信解决方案领导品牌。
        多年来，我们致力于扎根行业、深入场景进行产品设计和创新，
        为各行业用户构建端到端的解决方案，为客户网络创造新价值。
      </div>
      <a href="javascript:;" class="hezuo_shengqing">申请合作机构入驻</a>
    </div>

    <!-- 列表 -->
    <div class="shaixuan2">
      <select name="select" id="cateid" class="sel">
        <option value v-for="item in getcontentList" :key="item.id">{{item.attribute_name}}</option>
      </select>
      <!--阅读-->
      <select name="select" id="sort" class="sel">
        <option value="1">按阅读数最高</option>
        <option value="2">按阅读数最低</option>
      </select>
      <!-- 上传时间 -->
      <select name="select" id="sort" class="sel">
        <option value="1">按阅读数最高</option>
        <option value="2">按阅读数最低</option>
      </select>
      <input class="btn2" value="搜索文集" type="button" />
    </div>
    <!-- 全部文集 -->
    <div class="recomm">全部文集</div>
    <ul class="wenji_list">
      <li v-for="item in getAllList" :key="item.id">
        <a href="javascript:;">
          <img
            :src="item.meeting_image"
            alt="item.meeting_title"
            width="360"
            height="90"
          />
        </a>
        <div class="wenji_r">
          <div class="title">
            <a href="javascript:;">{{item.meeting_title}}</a>
          </div>
          <div class="time">
            <span>{{item.meeting_data | dateFormat}}更新</span>
          </div>
          <div class="xiazai">
            <span>阅读量:{{item.meeting_browse}}</span>
            <span>文档数:{{item.meeting_fileNumber}}</span>
            <span>文档数:{{item.meeting_price}}</span>
          </div>
        </div>
        <p>{{item.meeting_car}}</p>
      </li>
    </ul>
    <!-- 页数 -->
    <div class="page">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.page"
        :page-sizes="[5, 10, 15,25,35,45]"
        :page-size="queryInfo.per_page"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      classifyselectd: [],
      //文集推荐
      getUserList: [],
      getcontentList: [],
      //全部文集
      getAllList: [],
      // 合作机构
      getteamList: [],
      classifyProps: {
        lable: "attribute_name",
        value: "id"
      },
      queryInfo: {
        page: 1,
        per_page: 5
      },
      // 总条数
      total: 0
    };
  },
  methods: {
    //文集推荐
    async showData() {
      const { data: res } = await this.$http.get("/conference/albums");
      // console.log(res);
      this.getUserList = res.data;
      // console.log(this.getUserList);
    },
    // 图片
    async showDataimg() {
      const { data: res } = await this.$http.get("/conference/albums");
      console.log(res);
      this.getimgList = res.data;
    },
    // 分类列表
    async classifyData() {
      const { data: res } = await this.$http.get("/classification");
      if (res.code == 200) {
        this.getcontentList = res.data;
      }
      if (res.code !== 200) {
        return this.$message.error("获取分类列表失败");
      }
    },
    //全部文集
    async allData() {
      const { data: res } = await this.$http.get("/collections", {
        params: this.queryInfo
      });
      console.log(res);
      this.getAllList = res.data;
      this.total = res.total;
      console.log(this.getAllList);
    },

    // 一页显示多少条数据发生变化之后触发
    handleSizeChange(size) {
      this.queryInfo.per_page = size;
      this.allData();
    },
    // 页码发生变化之后触发
    handleCurrentChange(num) {
      this.queryInfo.page = num;
      this.allData();
    },
    // 合作机构
    async wordData() {
      const { data: res } = await this.$http.get("/cooperative/organization");
      // console.log(res);
      this.getteamList = res.data;
      // console.log(this.getteamList);
    }
  },
  created: function() {
    this.showData();
    this.allData();
    this.wordData();
    this.classifyData();
    this.showDataimg();
  }
};
</script>
<style>
@import "../assets/css/collected.css";
/* @import "../assets/css/reset.css"; */
</style>