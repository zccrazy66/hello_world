<template>

  <div class="index">
    <div>
       <h1>Welcome to My Website</h1>
    </div>

    <div class="box1">
      <b>天气预报</b>
      <div class="weather">
      <iframe width="420" scrolling="no" height="600" frameborder="0" allowtransparency="true" src="http://i.tianqi.com/index.php?c=code&id=12&icon=1&num=5"></iframe>
      </div>

    </div>

    <div class="calendar">
      <el-calendar v-model="value"></el-calendar>
    </div>

    <div>
      <canvas id="myCanvas"></canvas>
    </div>

  </div>


</template>

<script>



    export default {
      name: "index",
      data(){
        return{
          value: new Date(),

        }
      }

    }
</script>

<style scoped>

  h1{
    color: black;
    text-align: center;
  }
  .index{
    /*background: url("../assets/img/cxk.jpg") no-repeat ;*/
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-size: cover;
  }

  .box1{
    text-align: center;
    position: absolute;
    width: 430px;
    height: 350px;
    border: 1px solid black;
    border-radius: 20px;
    overflow: hidden;
  }

  .weather{
    margin-top: 30px;
  }

  .calendar{
    width: 600px;
    height: 500px;
    position: absolute;
    left: 700px;
  }

  #myCanvas{
    position: absolute;
    top: 200px;
  }



</style>
