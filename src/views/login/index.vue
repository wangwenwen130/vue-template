<template>
  <div id="login">
    <section>
      <div class="login-container">
        <img class="left-bg" src="../../assets/images/login_left_bg.png" />
        <div class="login-box">
          <div>欢迎登录 数据中台</div>
          <div class="box-main">
            <el-form v-model="platform.form">
              <el-form-item>
                <el-input
                  v-model="platform.form.username"
                  placeholder="请输入您的手机号码/用户名"
                  clearable
                />
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="platform.form.password"
                  type="password"
                  placeholder="请输入密码"
                  show-password
                  clearable
                />
              </el-form-item>
              <loadwrap
                style="width: 100%"
                type="primary"
                :disabled="getPlatformLoginDisabled()"
                @handle="doLogin"
                :loading="platform.isLoading"
                btn-text="登录"
              >
              </loadwrap>
            </el-form>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <span>copyright&copy; 2021-{{ platform.year }}杭州睿沃科技有限公司</span>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const platform = reactive({
  form: {
    username: '',
    password: ''
  },
  disable: false,
  isLoading: false,
  year: dayJs().year()
})

const getPlatformLoginDisabled = () => {
  if (platform.form.username != '' && platform.form.password != '') {
    platform.disable = false
    return false
  } else {
    platform.disable = true
    return true
  }
}

const doLogin = async () => {}
</script>

<style lang="scss">
#login {
  padding: 2% 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fafafa;
  min-height: 100vh;
  background-image: url('../../assets/images/bg.png');
  background-position: bottom;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  section {
    display: flex;
    justify-content: center;
    .login-container {
      width: 1100px;
      background: #ffffff;
      box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.1);
      border-radius: 10px 10px 10px 10px;
      opacity: 0.7;
      filter: blur(undefinedpx);
      display: flex;
      .left-bg {
        width: 50%;
        vertical-align: middle;
        background: linear-gradient(44deg, #ff6400, rgba(255, 100, 0, 0.3) 100%);
        border-radius: 10px;
      }
      .login-box {
        width: 50%;
        padding: 0 120px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        .box-main {
          margin-top: 40px;
        }
      }
    }
  }
  footer {
    width: calc(100% - 120px);
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    color: #555555;
    font-weight: 500;
  }
  .el-input__inner {
    height: 40px;
    line-height: 40px;
  }
  .el-button {
    height: 40px;
  }
}
</style>
