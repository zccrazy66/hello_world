<template>
  <div name="main">


  <div>
    <h2>文件上传测试</h2>

    <el-upload
      class = "upload_demo"
      ref="upload"
      action = "http://localhost:8080/api/picture"
      name="picture"
      multiple
      :on-success="handlePicSuccess"
    >
      <el-button size="small" type="primary">请出示您的船票</el-button>
<!--      <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>-->
    </el-upload><br>

    <div>
      <img :src="urls" class="pic">
    </div>

  </div>

  </div>




</template>

<script>

import pic_default from '@/assets/img/G.png'

    export default {
      name: "",
      data(){
        return{
          dialogVisible:false,
          urls: pic_default
        }
      },
      methods: {
         handlePicSuccess(res, filename) {
           this.urls = "http://localhost:8080/img_aft/" + res.picture;
           console.log(this.urls);

         },


        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        }




      }


    }
</script>

<style scoped>

  .pic{
    width: 400px;
    height: 400px;
  }

</style>
