<template>
  <el-container>
    <el-aside style="width: auto; background-color: rgb(238, 241, 246)">
      <app-aside :isCollapse="isCollapse"></app-aside>
    </el-aside>

    <el-container>
      <el-header>
        <app-header
          :isCollapse="isCollapse"
          :toggleCollapse="toggleCollapse"
        ></app-header>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
  <style lang="scss">
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-container {
  height: 100vh;
}

.el-aside {
  color: #333;
}
</style>
<script>
import appAside from './cpnts/app-aside.vue'
import appHeader from './cpnts/app-header.vue'
export default {
  name: 'layoutIndex',
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item),
      isCollapse: false
    }
  },
  components: {
    appAside,
    appHeader
  },
  methods: {
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }

}
</script>
