<template>
  <div>
    <div class="clearfix">
      <!-- 头部 -->
      <div class="top">
        <a href="javascript:;" class="top_one_a">{{albumData.meeting_title}}</a>
        <p class="top_one_p">{{albumData.meeting_car}}</p>
        <p class="top_two_p">
          <span>创建者：{{albumData.meeting_author}}</span>
          <span>上传时间：{{albumData.meeting_data | dateFormats}}</span>
          <span>浏览量：{{albumData.meeting_browse}}</span>
          <span>专题合计&nbsp;&nbsp;{{albumData.meeting_fileNumber}}&nbsp;&nbsp;份文档</span>
          <span>所需金币：{{albumData.meeting_price}}</span>
        </p>
      </div>
      <!-- 右侧 -->
      <div class="top_two">
        <img src="../assets/image/wyc/1.png" alt class="top_two_img" />
        <img src="../assets/image/wyc/2.png" alt class="top_two_imgs" />
      </div>
    </div>
    <div class="album">
      <div class="album-div">
        <span class="album-span album-span_one">相关文档</span>
        <span class="album-span album-span_two">售价</span>
        <span class="album-span album-span_three">浏览量</span>
        <span class="album-span album-span_four">上传日期</span>
      </div>
      <ul class="album-ul">
        <li v-for="item in correlationlist" :key="item.id">
          <p class="album-ul-span-one">
            <i v-if="item.formatName=='PDF'" class="doc_conent pdf"></i>
            <i v-else-if="item.formatName=='DOC'" class="doc_conent doc"></i>
            <i v-else-if="item.formatName=='PPT'" class="doc_conent ppt"></i>
            <i v-else-if="item.formatName=='PPTX'" class="doc_conent ppt"></i>
            <i v-else-if="item.formatName=='DOCX'" class="doc_conent doc"></i>

            <span class="span-one-one">{{item.file_name}}</span>
            <span class="span-one span-one-two">标签：{{item.technologyName}}</span>
            <span
              class="span-one span-one-three"
            >分类：{{item.technologyName}}&nbsp;-&nbsp;{{item.subName}}</span>
            <span class="span-one span-one-four">贡献者：{{item.file_author}}</span>
          </p>
          <span class="album-ul-span-two">{{item.file_price}}金币</span>
          <span class="album-ul-span-three">{{item.file_browse}}</span>
          <span class="album-ul-span-four">{{item.file_time | dateFormats}}</span>
        </li>
      </ul>
      <el-pagination
        background
        layout=" total,prev,pager,next, sizes,jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryinfor.page"
        :total="total"
        :page-sizes="[2,5,10,15]"
        :page-size="queryinfor.per_page"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 头部数据
      albumData: [],
      // 相关文档 数据
      correlationlist: [],
      //   总数
      total: 0,
      //  分页
      queryinfor: {
        query: "",
        page: 1,
        per_page: 10
      }
    };
  },
  methods: {
    // 头部 相关信息
    async getAlbum() {
      const { data: res } = await this.$http.get("album", {
        params: { id: this.$store.state.id }
      });
      //   console.log(res);
      this.albumData = res.data;
      //   console.log(this.albumData);
    },
    // 获取相关文档
    async documents() {
      const { data: res } = await this.$http.get("elated/documents", {
        params: this.queryinfor
      });
    //   console.log(res);
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
    }
  },
  created() {
    // 获取相关文档
    this.documents();
    // 头部 相关信息
    this.getAlbum();
  }
};
</script>

<style lang="less" scoped>
/* 清楚浮动 */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.top {
  float: left;
  width: 862px;
  border: 1px solid #ccc;
  .top_one_a {
    margin-top: 12px;
    display: block;
    font-size: 22px;
    text-decoration: none;
    text-align: center;
    color: #4290d6;
  }
  .top_one_p {
    font-size: 14px;
    padding: 0 15px;
    line-height: 26px;
    color: #333333;
    margin-top: 10px;
  }
  .top_two_p {
    height: 40px;
    border-top: 1px solid #ccc;
    line-height: 40px;
    padding: 0;
    margin: 0;
    span {
      font-size: 12px;
      margin-left: 15px;
      color: rgb(161, 161, 161);
    }
  }
}
.top_two {
  float: right;
  .top_two_img {
    width: 329px;
    height: 382px;
  }
  .top_two_imgs {
    width: 319px;
    height: 271px;
    position: absolute;
    top: 605px;
    right: 18.71%;
  }
}
.album {
  position: relative;
  width: 72%;
  top: -165px;
  .album-div {
    position: relative;
    width: 100%;
    height: 30px;
    padding: 0;
    margin: 0;
    padding-left: 30px;
    font-size: 13px;
    color: #666666;
    background: url(/img/lcs_bg.c3182825.png) no-repeat;
    background-position: 5px -507px;
    border-bottom: 1px solid #cccccc;
    text-align: center;
    box-sizing: border-box;
    .album-span {
      position: absolute;
      top: 5px;
    }
    .album-span_one {
      top: 0px;
      color: #008cd6;
      left: 32px;
      font-size: 16px;
    }
    .album-span_two {
      right: 270px;
    }
    .album-span_three {
      right: 160px;
    }
    .album-span_four {
      right: 24px;
    }
  }
  .album-ul {
    padding: 0;
    margin: 0;
    //
    list-style: none;
    li {
      height: 80px;
      font-size: 13px;
      line-height: 60px;
      padding-left: 30px;
      border-bottom: 1px dashed #ccc;
      .album-ul-span-one {
        position: relative;
        display: inline-block;
        margin: 0;
        width: 522px;
      }
      .album-ul-span-two {
        display: inline-block;
        width: 114px;
        color: #e9b769;
      }
      .album-ul-span-three {
        display: inline-block;
        width: 114px;
        color: #66bfe9;
      }
      .album-ul-span-four {
        color: rgb(161, 161, 161);
      }
    }
  }
}

.span-one {
  position: absolute;
  top: 24px;
  color: rgb(161, 161, 161);
  font-size: 12px;
}
.span-one-two {
  width: 90px;
  left: 0;
}
.span-one-three {
  width: 180px;
  left: 110px;
}
.span-one-four {
  //   width: 180px;
  left: 290px;
}
.doc_conent {
  background-image: url("../assets/image/it168/ia_100000025.png");
  width: 20px;
  height: 24px;
  position: absolute;
  display: inline-block;
  background-repeat: no-repeat;
  top: 18px;
  left: -28px;
}
.pdf {
  background-position: -231px -564px;
}
.doc {
  background-position: -126px -564px;
}
.ppt {
  background-position: 0 -564px;
}
.pptx {
  background-position: 0 -564px;
}
.el-pagination {
  margin-top: 10px;
}
</style>