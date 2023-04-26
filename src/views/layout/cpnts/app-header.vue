<template>
  <div>
    <el-dropdown>
      <i :class="FoldCls" @click="toggleCollapse"></i>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>coderzmy</span>
  </div>
</template>
<script>

export default {
  data () {
    return {
    }
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    },
    toggleCollapse: {
      type: Function,
      require: true
    }
  },
  methods: {},
  components: {},
  computed: {
    FoldCls () {
      return this.isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'
    }
  }
}
</script>
<style scoped></style>
