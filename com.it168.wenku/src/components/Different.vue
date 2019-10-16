<template>
  <div class="different">
    <!-- 内容一 -->
    <div class="content-a"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    async getListdata() {
      const  data = await this.$http.get("/technology");
      // console.log(res);
      console.log(data);
    }
  },
  created() {
    this.getListdata();
  }
};
</script>
<style lang="less" scoped>
.content-a {
  width: 100%;
  height: 418px;
  background-color: aqua;
}
</style>