<template>
  <div>
    <div id="picture">
      <el-image :src="src"></el-image>
    </div>

    <div id="button">

      <el-upload
        class = "upload_demo"
        ref="upload"
        action = "http://localhost:8080/api/picture"
        name="picture"
        multiple
        :on-success="handlePicSuccess"
        :on-error="handleError"
      >
        <el-button size="small" type="primary">请出示您的船票</el-button>
        <!--      <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>-->
      </el-upload><br>


      <el-button type="primary">呦呦</el-button><br><br>
      <el-button type="primary">开一把</el-button>
    </div>

    <div id="preview">





    </div>



  </div>
</template>

<script>

  export default {
    data () {
      return  {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        isShow:false,
      }
    },
    methods: {
      uploadImg (e) {
        let _this = this;
        let files = e.target.files[0];
        if (!e || !window.FileReader) return; // 看支持不支持FileReader
        let reader = new FileReader();
        reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
        reader.onloadend = function () {
          _this.src = this.result;
          _this.isShow = true;
        }
      },

      forkImage () {
        this.src = '';
        this.isShow = false;
      }
    }
  }









</script>

<style scoped>

 .el-image{
   width: 600px;
   height: 400px;
   position: absolute;
   top: 60px;
   left: 100px;
 }


  #button{

    position: absolute;
    left: 800px;
    top: 60px;


  }

</style>


