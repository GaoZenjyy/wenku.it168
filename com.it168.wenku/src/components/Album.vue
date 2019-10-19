<template>
  <div>
    <div class="top">
      <a href="javascript:;">{{albumData.meeting_title}}</a>
      <p class="top_one_p">{{albumData.meeting_car}}</p>
      <p class="top_two_p">
        <span>创建者：{{albumData.meeting_author}}</span>
      </p>
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
  width: 862px;
  border: 1px solid #ccc;
  a {
    display: block;
    font-size: 22px;
    text-decoration: none;
    text-align: center;
    color: #4290d6;
  }
  .top_p {
    font-size: 14px;
    padding: 0 15px;
    line-height: 26px;
    color: #333333;
  }
}
</style>