<!-- 登录页面 -->
<template>
  <div class="login index">
    <div class="login-img">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="loginCategory">
        <button :class="{ active: category }" @click="changePhone">
          短信登录
        </button>
        <button :class="{ active: !category }" @click="changeId">
          账号登录
        </button>
      </div>
      <div v-if="loginFlag" class="phone">
        <div>
          <input
            type="text"
            placeholder="请输入手机号"
            maxlength="11"
            v-model="phone"
          />
        </div>
        <div>
          <input type="text" placeholder="请输入验证码" />
          <button v-if="!num" @click="getCodeFn">点击获取验证码</button>
          <button v-else disabled>{{ num }}s后重新获取</button>
        </div>
        <button class="toLogin">登录</button>
      </div>
      <div v-else class="phone">
        <div>
          <input type="text" placeholder="用户名/邮箱/手机号" v-model="id" />
        </div>
        <div>
          <div v-if="isshow">
            <input type="password" placeholder="请输入密码" v-model="pass" />
            <button class="iconfont icon-xianshi" @click="changeShow"></button>
          </div>
          <div v-else>
            <input type="text" placeholder="请输入密码" v-model="pass" />
            <button class="iconfont icon-yincang" @click="changeShow"></button>
          </div>
        </div>
        <div>
          <input type="text" placeholder="验证码" v-model="captcha" />
          <img
            ref="captcha"
            src="http://localhost:3000/api/v1/users/captcha"
            @click="getCaptcha"
          />
        </div>
        <button class="toLogin" @click="toLogin">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "mint-ui";
import { loginuser } from "@/api/login.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      category: true,
      loginFlag: true,
      num: 0,
      time: "",
      phone: "",
      isshow: true,
      id: "",
      pass: "",
      captcha: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    testPhone() {
      return /^[1][3,5,7,8,9][0-9]{9}$/.test(this.phone);
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changePhone() {
      this.category = true;
      this.loginFlag = true;
    },
    changeId() {
      this.category = false;
      this.loginFlag = false;
    },
    getCodeFn() {
      if (this.testPhone) {
        this.num = 60;
        this.timer = setInterval(() => {
          this.num--;
          if (this.num == 0) {
            clearInterval(this.timer);
          }
        }, 1000);
      } else {
        Toast("手机号格式不正确");
      }
    },
    changeShow() {
      this.isshow = !this.isshow;
    },
    getCaptcha() {
      this.$refs.captcha.src =
        "http://localhost:3000/api/v1/users/captcha?t=" + new Date().getTime();
    },
    async toLogin() {
      if (!this.id) {
        Toast("用户名/邮箱/手机号！");
        return;
      } else if (!this.pass) {
        Toast("请输入密码！");
        return;
      } else if (!this.captcha) {
        Toast("请输入验证码！");
        return;
      }
      let result = await loginuser(this.id, this.pass, this.captcha);
      if (result.err_code == 0) {
        Toast("验证码不正确");
      } else if (result.status == 500) {
        Toast(result.msg);
      } else if (result.status == 200) {
        this.$store.dispatch("getUserInfo", result.data[0]);
        this.$router.push("/home");
      }
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.index {
  z-index: 1;
  .login-img {
    .loginCategory {
      width: 28rem;
      display: flex;
      justify-content: space-between;
      button {
        width: 12rem;
        height: 4rem;
        background-color: #999;
        color: #fff;
        border-radius: 2px;
      }
      .active {
        background-color: red;
      }
    }
    .phone {
      div {
        position: relative;
        margin: 2rem auto 0;
        input {
          width: 100%;
          height: 3.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          text-indent: 1rem;
          &:focus {
            border: 1px solid blue;
          }
        }
        button {
          position: absolute;
          top: 2px;
          right: 2px;
          height: 3.3rem;
          line-height: 3.3rem;
          background-color: transparent;
          color: #ccc;
        }
        img {
          position: absolute;
          top: 2px;
          right: 0;
          height: 3.3rem;
          border-left: 1px solid #ccc;
        }
      }
      .toLogin {
        width: 100%;
        height: 4rem;
        margin-top: 2rem;
        background-color: #f00;
        color: #fff;
      }
    }
  }
}
</style>