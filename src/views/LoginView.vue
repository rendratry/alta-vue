<template>
  <div class="container">
    <template >
      <h4 class="not-margin">
        Login kedalam <b>rvfurniture</b>
      </h4>
    </template>
    <div class="con-form">
      <vs-input v-model="email" placeholder="Email">
        <template #icon>
          @
        </template>
      </vs-input>
      <vs-input type="password" v-model="password" placeholder="Password">
        <template #icon>
          <i class='bx bxs-lock'></i>
        </template>
      </vs-input>
      <div class="flex">
        <vs-checkbox v-model="remember">Remember me</vs-checkbox>
        <a href="#">Forgot Password?</a>
      </div>
    </div>

    <template>
      <div class="footer-dialog">
        <vs-button block>
          Sign In
        </vs-button>
        <div class="new">
          New Here? <a href="#">Create New Account</a>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name:'LoginView',
  data:() => ({
    active: false,
    email: '',
    password: '',
    remember: false
  })
}
</script>

<style lang="stylus" scoped>
.container
  margin-left 35%
  margin-right 35%
  display flex
  flex-direction column
  align-items center
  justify-content center
  height 100vh

.login-box
  width 300px
  padding 20px
  background-color #fff
  border 1px solid #ddd
  border-radius 10px
  box-shadow 0px 0px 10px rgba(0, 0, 0, 0.1)

h4
  font-size 1.2rem
  text-align center
  margin-bottom 20px

.vs-input-content
  margin 10px 0px

.flex
  display flex
  align-items center
  justify-content space-between
  a
    font-size 0.8rem
    opacity 0.7
    &:hover
      opacity 1

.vs-checkbox-label
  font-size 0.8rem

.vs-input
  width 100%

.footer-dialog
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%

.new
  margin 0px
  margin-top 20px
  padding 0px
  font-size 0.7rem
  a
    color #007bff
    margin-left 6px
    &:hover
      text-decoration underline

.vs-button
  margin 0px
</style>
