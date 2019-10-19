<template>
  <div>
    <div class="w1200 clearfix">
      <div class="l2">
        <!-- 图片 -->
        <div>
          <img
            src="http://pic.wenku.it168.com/positionimgs/bfff592468398c10f9ec35d0ce3babe8.png"
            alt="第十届中国系统架构师大会（SACC）演讲PPT"
          />
        </div>
        <!-- 筛选项 -->
        <div class="tit">筛选项</div>
        <!-- 下拉框 -->
        <div class="shaixuan2">
          <!-- 全部技术 -->
          <select name="select" class="sel">
            <option v-for="item in classifyList" :key="item.id">{{item.attribute_name}}</option>
          </select>
          <!-- 年份 -->
          <select name="select" class="sel">
            <option v-for="item in yearList" :key="item.id">{{item.year}}</option>
          </select>
          <!-- 月份 -->
          <select name="select" class="sel">
            <option v-for="item in monthList" :key="item.id">{{item.month}}</option>
          </select>
          <!-- 搜索文档 -->
          <input type="button" class="btn2" value="搜索文档" />
        </div>
        <div class="dq">
          <div class="tit5">
            <p>
              <span class="n1">资料数量</span>
              <span class="n1">会议地点</span>
              <span class="n1">浏览量</span>
              <span class="n2">会议时间</span>
            </p>会议大全
          </div>
          <!-- 会议大全 -->
          <ul class="wendang_list5">
            <li v-for="item in meetingList" :key="item.id">
              <div class="n5">
                <!-- 五角星 -->
                <em></em>
                <div class="title">
                  <a
                    href="javascript:;"
                    style="text-decoration: none; color:#333"
                  >{{item.meeting_title}}</a>
                </div>
              </div>
              <div class="n2">{{item.meeting_fileNumber}}</div>
              <div class="n2">{{item.meeting_place}}</div>
              <div class="n3">{{item.meeting_browse}}</div>
              <div class="n4">{{item.meeting_data | dateFormats}}</div>
            </li>
          </ul>
          <!-- 分页 -->
          <div class="block">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="queryInfo.page"
              :page-sizes="[5, 10, 15]"
              :page-size="queryInfo.per_page"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            ></el-pagination>
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <div class="r2">
        <div class="wenku">
          <dl>
            <dt>IT168文库海量技术文档</dt>
            <dd>
              <span>1388942</span>
              篇
            </dd>
            <dt>国内热门尖端会议资料</dt>
            <dd>
              <span>1004</span>
              篇
            </dd>
            <dt>技术文集</dt>
            <dd>
              <span>449</span>
              篇
            </dd>
          </dl>
        </div>
        <div class="padd" style="margin:0">
          <div class="title11">最新收录会议</div>
          <ul class="huiyi_list" v-for="item in NewMeetingList" :key="item.id">
            <li>
              <a
                href="javascript:;"
                style="text-decoration: none; color:#333"
              >{{item.meeting_title}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classifyselectd: [],
      // 分类列表
      classifyList: [],
      // 会议记录列表
      meetingList: [],
      // 最新记录列表
      NewMeetingList: [],
      classifyProps: {
        lable: "attribute_name",
        value: "id"
      },
      queryInfo: {
        page: 1,
        per_page: 5
      },
      // 总条数
      total: 0,
      // 年份列表
      yearList: [
        { year: "年份" },
        { year: "2020年" },
        { year: "2019年" },
        { year: "2018年" },
        { year: "2017年" },
        { year: "2016年" },
        { year: "2015年" },
        { year: "2014年" },
        { year: "2013年" },
        { year: "2012年" },
        { year: "2011年" }
      ],
      //月份列表monthList
      monthList: [
        { month: "月份" },
        { month: "01月" },
        { month: "02月" },
        { month: "03月" },
        { month: "04月" },
        { month: "05月" },
        { month: "06月" },
        { month: "07月" },
        { month: "08月" },
        { month: "09月" },
        { month: "10月" },
        { month: "11月" },
        { month: "12月" }
      ]
    };
  },
  methods: {
    // 获取分类列表
    async getcontentList() {
      const { data: res } = await this.$http.get("classification");

      // if (res.code == 200) {
      this.classifyList = res.data;
      // }
      // if (res.code !== 200) {
      //   return this.$message.error("获取分类列表失败");
      // }
      // console.log(res);
    },
    // 获取会议大全列表
    async getmeetingList() {
      const { data: res } = await this.$http.get("collections", {
        params: this.queryInfo
      });
      // console.log(res);
      this.meetingList = res.data;
      this.total = res.total;
    },
    // 处理 每页显示多少条数据
    handleSizeChange(newsize) {
      this.queryInfo.per_page = newsize;
      this.getmeetingList();
    },
    // 跳转到第几页 要把页码要传出来
    handleCurrentChange(newpagenum) {
      this.queryInfo.page = newpagenum;
      this.getmeetingList();
    },
    // 获取最新记录会议
    async getNewmeetinglist() {
      const { data: res } = await this.$http.get("included/meeting");
      // console.log(res);
      this.NewMeetingList = res.data;
    }
  },
  created() {
    this.getcontentList();
    this.getmeetingList();
    this.getNewmeetinglist();
  }
};
</script>

<style scoped>
@import "../assets/css/themeeting.css";
/* @import "../assets/css/reset.css"; */
</style>