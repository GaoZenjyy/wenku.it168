<template>
  <div>
    <div class="top">
      <a href="javascript:;">{{albumData.meeting_title}}</a>
      <p class="top_one_p">{{albumData.meeting_car}}</p>
      <p class="top_two_p">
        <span>创建者：{{albumData.meeting_author}}</span>
        <span>上传时间：{{albumData.meeting_data | dateFormats}}</span>
        <span>浏览量：{{albumData.meeting_browse}}</span>
        <span>专题合计&nbsp;&nbsp;{{albumData.meeting_fileNumber}}&nbsp;&nbsp;份文档</span>
        <span>所需金币：{{albumData.meeting_price}}</span>
      </p>
    </div>
    <div class="top_two">
      <img src="../assets/image/lcs_img/lcs_21-30-23.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 头部数据
      albumData: []
    };
  },
  methods: {
    async getAlbum() {
      const { data: res } = await this.$http.get("album", {
        params: { id: this.$store.state.id }
      });
      //   console.log(res);
      this.albumData = res.data;
      console.log(this.albumData);
    }
  },
  created() {
    this.getAlbum();
  }
};
</script>

<style lang="less" scoped>
.top {
  float: left;
  width: 862px;
  border: 1px solid #ccc;
  a {
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
}
</style>