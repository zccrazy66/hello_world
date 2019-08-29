<template>
  <el-menu mode="vertical" unique-opened :default-active="$route.path" :collapse="isCollapse"
           background-color="#304156" text-color="#fff" active-text-color="#409EFF">
    <sidebar-msg :routes="permission_routers"></sidebar-msg>
  </el-menu>


</template>

<script>
  import {mapGetters} from 'vuex'
  import SidebarMsg from './Sidebarmsg'

    export default {
        name:'Sidebar',
        components: {SidebarMsg},
        computed:{
          ...mapGetters([
            'permission_routers',
            'sidebar'
          ]),
          isCollapse(){
            return !this.sidebar.opened
          }
        }
    }
</script>

