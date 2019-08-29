<template>

<!--<div class="login_box">-->
<!--  <el-row>-->
<!--    <el-col :span="8">-->
<!--      <el-input id="name" v-model="name" placeholder="请输入帐号">-->
<!--        <template slot="prepend">帐号</template>-->
<!--      </el-input>-->
<!--    </el-col>-->
<!--  </el-row>-->
<!--  <el-row>-->
<!--    <el-col :span="8">-->
<!--      <el-input id="password" v-model="password" type="password" placeholder="请输入密码">-->
<!--        <template slot="prepend">密码</template>-->
<!--      </el-input>-->
<!--    </el-col>-->
<!--  </el-row>-->
<!--  <el-row>-->
<!--    <el-col :span="8">-->
<!--      <el-button id="login" v-on:click="check" style="width:100%" type="primary">登录</el-button>-->
<!--    </el-col>-->
<!--  </el-row>-->


<!--&lt;!&ndash;  <input type="text">&ndash;&gt;-->
<!--</div>-->
  <div class="login-container">
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left"
             label-width="0px"
             class="card-box login-form">
      <h3 class="title">后台管理系统</h3>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
<!--          <svg-icon icon-class="user"/>-->
        </span>
        <el-input v-model="loginForm.username" autoComplete="on"/>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
<!--          <svg-icon icon-class="password"></svg-icon>-->
        </span>
        <el-input type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password"
                  autoComplete="on"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click="handleLogin">
          登录
        </el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
    export default {

      data() {
        return {
          loginForm: {
            username: 'admin',
            password: 'admin'
          },
          loginRules: {
            username: [{required: true, trigger: 'blur', message: "请输入用户名"}],
            password: [{required: true, trigger: 'blur', message: "请输入密码"}]
          },
          loading: false
        }
      },
      methods:{
            handleLogin(){
              this.$refs.loginForm.validate(valid => {
                if (valid) {
                  // console.log("start dispatch login")
                  // this.loading = true
                  this.$store.dispatch('Login', this.loginForm).then(data => {
                    // this.loading = false
                    console.log("login's data");
                    console.log(data);
                    if ("success" === data.msg) {
                      console.log("into the index");
                      this.$router.push({path: '/'})
                    } else {
                      console.log("****print something*****")
                      this.$message.error("账号/密码错误");
                    }
                  }).catch(() => {
                    // this.loading = false
                  })
                } else {
                  return false
                }
              })
            }





      }
    }
</script>

<style scoped>

</style>
