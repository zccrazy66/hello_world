<template>
<div>




  <child></child>




</div>

</template>

<script>

  import child from './child'

    export default {
        name: "",
        data(){
          return{


          }
        },
      components:{
          'child':child
      },
      computed:{


      },
      methods:{

      }

    }
</script>

<style scoped>

  /*[v-cloak]{*/
  /*  display: none;*/
  /*}*/

 h2{
   color: #ff0207;
 }
</style>
