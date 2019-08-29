<template>
<!--    <div class="main">-->
<!--      <v-header></v-header>-->
<!--      <div class="left">-->
<!--        <v-sidebar></v-sidebar>-->
<!--      </div>-->
<!--      <div class="content">-->
<!--        <transition name="el-zoom-in-top">-->
<!--          <router-view v-show="show"></router-view>-->
<!--        </transition>-->
<!--      </div>-->
<!--    </div>-->
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>

  import {Navbar, AppMain} from '@/View/layout/component'
  import Sidebar from '@/View/layout/component/Sidebar/index'

    export default {
      name: "home",

      components:{
        Navbar,
        AppMain,
        Sidebar
      },
      computed:{
        sidebar(){
          return this.$store.state.app.sidebar
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/style/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

}

</style>
