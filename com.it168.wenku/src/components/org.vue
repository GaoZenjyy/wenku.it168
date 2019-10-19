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
      <div class="one" v-for="item in ListlcsData" :key="item.id">
        <!-- 上部分 -->
        <div class="one_top">
          <!-- 左边 -->
          <div class="one_topleft">
            <img :src="item.image" alt class="a" @click="mm(item.id)" />
            <i class="b"></i>
          </div>
          <!-- 右边 -->
          <div class="one_topright">
            <div class="topright_one">
              <p class="one_p">{{item.fileNumber}}</p>
              <p class="one_span">文档量</p>
            </div>
            <div class="topright_one">
              <p class="one_p">{{item.browseNumber}}</p>
              <p class="one_span">浏览量</p>
            </div>
            <div class="topright_two">
              <p class="one_p">{{item.downloadNumber}}</p>
              <p class="one_span">下载量</p>
            </div>
          </div>
        </div>
        <!-- 下部分 -->
        <div class="one_bottom">
          <div class="one_bottomleft">
            <ul>
              <li v-for="item1 in item.children" :key="item1.id">
                <a href>{{item1.file_name}}</a>
              </li>
            </ul>
          </div>
          <div class="one_bottomright">
            <ul>
              <li class="bottomright" v-for="item1 in item.children" :key="item1.id">
                <span class="yue">阅读量：{{item1.file_browse}}</span>
                <span class="xia">下载量：{{item1.file_download}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <el-pagination
      class="pagination"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagingList.page"
      :page-sizes="[ 2 , total / 2, 10 ]"
      :page-size="pagingList.per_page"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>  

 
 <script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      // 数据
      ListlcsData: [],
      // 分页数据
      pagingList: {
        // 页数
        page: 1,
        // 条数
        per_page: 2
      },
      // 分页默认显示0
      total: 0
    };
  },
  //  方法
  methods: {
    ...mapMutations(["mm"]),
    mm(id) {
      this.$store.commit("mm", id);
      this.$router.push("/company");
    },
    // 写函数
    async lcsData() {
      const { data: res } = await this.$http.get("/agency", {
        params: this.pagingList
      });
      // console.log(res);
      // 把数据放进数组
      this.ListlcsData = res.data;
      // 把分页总条数放进数组
      this.total = res.total;
      // console.log(this.ListlcsData);
    },
    handleSizeChange(val) {
      this.pagingList.per_page = val;
      // 调用
      this.lcsData();
    },
    handleCurrentChange(val) {
      this.pagingList.page = val;
      // 调用
      this.lcsData();
    }
  },
  // 生命周期
  created() {
    // console.log(mapState);

    this.lcsData();
  }
};
</script>


<style scoped>
/* 图片 */
.tupian {
  position: relative;
  height: 295px;
}
.tu_one {
  position: absolute;
  top: 0;
  left: 0;
  /* float: left; */
  width: 856px;
}
.tu_two {
  position: absolute;
  top: 0;
  right: 0;
  /* float: right; */
  width: 329px;
  height: 291px;
  margin-left: 5px;
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
  overflow-y: hidden;
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
  text-decoration: underline;
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

.pagination {
  margin-top: 30px;
  margin-left: 120px;
}
</style>
