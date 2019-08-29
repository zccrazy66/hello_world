<template>

  <div>
    <h2 class="test1"> just for test </h2>
    <h2 class="test2"> just for test</h2>
  </div>



</template>

<script>
    export default {
        name: "child",
      data(){
          return{
            qw:"qqqqqqq66",
            // zc: this.zczc
          }
      },
      props:['zczc_c'],


    }
</script>

<style scoped>


  .test2{
    color: #ffa178;
  }


  /*.test1{*/
  /*  color: #ff0207;*/
  /*}*/



</style>
