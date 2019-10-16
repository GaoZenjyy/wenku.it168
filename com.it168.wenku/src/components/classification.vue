<template>
  <el-container>
    <el-main>
      <el-container>
        <el-main>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">筛选项</div>
            </el-col>
          </el-row>
        </el-main>
        <el-aside width="200px">Aside</el-aside>
      </el-container>
    </el-main>
  </el-container>
</template>
<style>
el-container {
  margin: 0 auto;
  width: 1200px;
  padding-top: 12px;
}
el-main {
  background: bisque;
  float: left;
  width: 862px;
  overflow: hidden;
}
</style>