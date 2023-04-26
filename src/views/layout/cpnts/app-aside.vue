<template>
  <el-menu router unique-opened :collapse="isCollapse">
    <a href="" class="logo">
      <img src="@/assets/logo.jpg" alt="" />
      <h1>HDU</h1>
    </a>
    <el-submenu index="1">
      <template slot="title"
        ><i class="el-icon-lock"></i><span>权限管理</span></template
      >
      <el-menu-item index="/roles"
        ><i class="el-icon-s-tools"></i>角色列表</el-menu-item
      >
      <el-menu-item index="/menus"
        ><i class="el-icon-s-tools"></i>菜单列表</el-menu-item
      >
      <el-menu-item index="/source"
        ><i class="el-icon-s-tools"></i>资源列表</el-menu-item
      >
    </el-submenu>
    <el-menu-item index="/course"
      ><i class="el-icon-film"></i><span>课程管理</span></el-menu-item
    >
    <el-menu-item index="/users"
      ><i class="el-icon-user"></i><span>用户管理</span></el-menu-item
    >
    <el-submenu index="2">
      <template slot="title"
        ><i class="el-icon-suitcase"></i><span>广告管理</span></template
      >
      <el-menu-item index="adList"
        ><i class="el-icon-sell"></i>广告列表</el-menu-item
      >
      <el-menu-item index="ADList"
        ><i class="el-icon-sell"></i>广告位列表</el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>
<script>

export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {},
  components: {}
}
</script>
<style scoped lang="scss">
.logo {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 36px;
    height: 32px;
  }
}
.el-menu {
  height: 100%;
  width: 200px;
  &.el-menu--collapse {
    width: 64px;
    h1 {
      display: none;
    }
  }
}
</style>
