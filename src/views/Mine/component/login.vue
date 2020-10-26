<!-- 登录组件 -->
<template>
  <div class="login">
    <div class="login-img">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <router-link to="/login" tag="button" class="click">点击登录</router-link>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99999;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login-img {
    .logo {
      width: 10rem;
      height: 10rem;
      border: 3px solid #eee;
      border-radius: 50%;
      margin: 0 auto;
      img {
        width: 10rem;
      }
    }
    .click {
      width: 20rem;
      height: 4rem;
      margin-top: 1rem;
      background-color: #f00;
      color: #fff;
    }
  }
}
</style>