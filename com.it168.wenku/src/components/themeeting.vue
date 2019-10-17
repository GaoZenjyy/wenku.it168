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
          <el-select v-model="classifyselectd" placeholder="请选择">
            <el-option
              v-for="item in classifyList"
              :key="item.id"
              :label="item.attribute_name"
              :value="item.id"
            ></el-option>
          </el-select>
          <!-- <el-cascader v-model="classifyselectd" :option="classifyList" :props="classifyProps"></el-cascader> -->
          <select name="select" class="sel">
            <option value>年份</option>
            <option value>2020年</option>
            <option value>2019年</option>
            <option value>2018年</option>
            <option value>2017年</option>
            <option value>2016年</option>
            <option value>2015年</option>
            <option value>2014年</option>
            <option value>2013年</option>
            <option value>2012年</option>
            <option value>2011年</option>
          </select>
          <select name="select" class="sel">
            <option value>月份</option>
            <option value>01月</option>
            <option value>02月</option>
            <option value>03月</option>
            <option value>04月</option>
            <option value>05月</option>
            <option value>06月</option>
            <option value>07月</option>
            <option value>08月</option>
            <option value>09月</option>
            <option value>10月</option>
            <option value>11月</option>
            <option value>12月</option>
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
            <li>
              <div class="n5">
                <!-- 五角星 -->
                <em></em>
                <div class="title">
                  <a href>第十届中国数据库技术大会（DTCC）演讲PPT</a>
                </div>
              </div>
              <div class="n2">99篇</div>
              <div class="n2">未知</div>
              <div class="n3">2627</div>
              <div class="n4">2019-05-08</div>
            </li>
            <li>
              <div class="n5">
                <!-- 五角星 -->
                <em></em>
                <div class="title">
                  <a href>第九届中国数据库技术大会（DTCC）演讲集锦</a>
                </div>
              </div>
              <div class="n2">85篇</div>
              <div class="n2">北京</div>
              <div class="n3">14344</div>
              <div class="n4">2018-05-01</div>
            </li>
            <li>
              <div class="n5">
                <!-- 五角星 -->
                <em></em>
                <div class="title">
                  <a href>2017中国大数据技术大会</a>
                </div>
              </div>
              <div class="n2">27篇</div>
              <div class="n2">北京</div>
              <div class="n3">6103</div>
              <div class="n4">2018-02-06</div>
            </li>
            <li>
              <div class="n5">
                <!-- 五角星 -->
                <em></em>
                <div class="title">
                  <a href>SDCC 2017互联网应用架构实战峰会</a>
                </div>
              </div>
              <div class="n2">7篇</div>
              <div class="n2">北京</div>
              <div class="n3">5484</div>
              <div class="n4">2018-02-05</div>
            </li>
            <li>
              <div class="n5">
                <!-- 五角星 -->
                <em></em>
                <div class="title">
                  <a href>2017 全球云计算开源峰会</a>
                </div>
              </div>
              <div class="n2">14篇</div>
              <div class="n2">北京</div>
              <div class="n3">5561</div>
              <div class="n4">2018-02-05</div>
            </li>
            <li>
              <div class="n5">
                <!-- 五角星 -->
                <em></em>
                <div class="title">
                  <a href>PostgreSQL 2017中国技术大会</a>
                </div>
              </div>
              <div class="n2">22篇</div>
              <div class="n2">北京</div>
              <div class="n3">15610</div>
              <div class="n4">2018-02-05</div>
            </li>
            <li>
              <div class="n5">
                <!-- 五角星 -->
                <em></em>
                <div class="title">
                  <a href>ECCS-2017企业云计算峰会</a>
                </div>
              </div>
              <div class="n2">6篇</div>
              <div class="n2">北京</div>
              <div class="n3">5433</div>
              <div class="n4">2018-01-29</div>
            </li>
            <li>
              <div class="n5">
                <!-- 五角星 -->
                <em></em>
                <div class="title">
                  <a href>中国第三届CSS开发者大会</a>
                </div>
              </div>
              <div class="n2">6篇</div>
              <div class="n2">北京</div>
              <div class="n3">5236</div>
              <div class="n4">2018-02-05</div>
            </li>
            <li>
              <div class="n5">
                <!-- 五角星 -->
                <em></em>
                <div class="title">
                  <a href>Gdevops-2017全球敏捷运维峰会</a>
                </div>
              </div>
              <div class="n2">36篇</div>
              <div class="n2">北京</div>
              <div class="n3">5225</div>
              <div class="n4">2018-02-05</div>
            </li>
            <li>
              <div class="n5">
                <!-- 五角星 -->
                <em></em>
                <div class="title">
                  <a href>2017先知白帽大会（阿里云云盾先知）</a>
                </div>
              </div>
              <div class="n2">9篇</div>
              <div class="n2">北京</div>
              <div class="n3">5406</div>
              <div class="n4">2018-02-05</div>
            </li>
          </ul>
          <!-- 分页 -->
          <div class="page">
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
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
          <ul class="huiyi_list">
            <li>
              <a href>第十届中国数据库技术大会（DTCC）演讲PPT</a>
            </li>
            <li>
              <a href>第九届中国数据库技术大会（DTCC）演讲集锦</a>
            </li>
            <li>
              <a href>后直播时代技术</a>
            </li>
            <li>
              <a href>2017中国大数据技术大会</a>
            </li>
            <li>
              <a href>SDCC 2017互联网应用架构实战峰会</a>
            </li>
            <li>
              <a href>2017 全球云计算开源峰会</a>
            </li>
            <li>
              <a href>PostgreSQL 2017中国技术大会</a>
            </li>
            <li>
              <a href>ECCS-2017企业云计算峰会</a>
            </li>
            <li>
              <a href>2017先知白帽大会（阿里云云盾先知）</a>
            </li>
            <li>
              <a href>第九届中国Hadoop技术峰会2017 北京站</a>
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
      classifyProps: {
        lable: "attribute_name",
        value: "id"
      }
    };
  },
  methods: {
    async getcontentList() {
      const { data: res } = await this.$http.get("classification");
      // console.log(res);
      if (res.code == 200) {
        this.classifyList = res.data;
        // console.log(this.classifyList);
        // return this.$message.success("获取分类列表成功");
      }
      if (res.code !== 200) {
        return this.$message.error("获取分类列表失败");
      }
    }
  },
  created() {
    this.getcontentList();
  }
};
</script>

<style scoped>
@import "../assets/css/themeeting.css";
@import "../assets/css/reset.css";
</style>