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
          <!-- 分类 -->
          <el-select v-model="classifyselectd" value="全部">
            <el-option
              v-for="item in classifyList"
              :key="item.id"
              :label="item.attribute_name"
              :value="item.id"
            ></el-option>
          </el-select>
          <!--年份 -->
          <!-- <el-select>
            <el-option label="年份" value>年份</el-option>
            <el-option label="2020年"></el-option>
            <el-option label="2019年"></el-option>
            <el-option label="2018年"></el-option>
            <el-option label="2017年"></el-option>
            <el-option label="2016年"></el-option>
            <el-option label="2015年"></el-option>
            <el-option label="2014年"></el-option>
            <el-option label="2013年"></el-option>
            <el-option label="2012年"></el-option>
            <el-option label="2011年"></el-option>
          </el-select>-->
          <!-- 月份 -->
          <!-- <el-select>
            <el-option></el-option>
          </el-select>-->
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

          <el-table :data="meetingList" stripe style="width: 100%">
            <el-table-column prop="meeting_title" width="350" label="会议大全"></el-table-column>
            <el-table-column prop="meeting_fileNumber" width="150" label="资料数量"></el-table-column>
            <el-table-column prop="meeting_place" label="会议地点" width="150"></el-table-column>
            <el-table-column prop="meeting_browse" label="浏览量"></el-table-column>
            <el-table-column prop="meeting_data" label="会议时间"></el-table-column>
          </el-table>
          <!-- 分页 -->
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="queryInfo.page"
              :page-sizes="[2, 5, 10, 15]"
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
        <div class="padd">
          <div class="title11">最新收录会议</div>
          <ul class="huiyi_list" v-for="item in NewMeetingList" :key="item.id">
            <li>
              <a href >{{item.meeting_title}}}</a>
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
        per_page: 2
      },
      // 总条数
      total: 0
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
      console.log(res);
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
@import "../assets/css/reset.css";
</style>