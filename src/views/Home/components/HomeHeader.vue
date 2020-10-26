<!-- 首页头部组件 -->
<template>
  <div class="home-header">
    <header class="header">
      <form>
        <input type="text" placeholder="请输入关键字" @click="toSearch" />
        <i class="iconfont icon-search"></i>
      </form>
      <i class="iconfont icon-xinxi"></i>
    </header>
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
  methods: {
    toSearch() {
      this.$router.push("/cateSearch");
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
<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 4.4rem;
  background-color: red;
  display: flex;
  line-height: 4.4rem;
  form {
    width: 92%;
    text-align: center;
    position: relative;
    input {
      width: 95%;
      height: 2.8rem;
      background-color: #fff;
      border-radius: 2.5rem;
      font-size: 1.2rem;
      text-indent: 1rem;
    }
    i {
      position: absolute;
      right: 1.5rem;
      color: gray;
    }
  }
  .icon-xinxi {
    width: 8%;
    font-size: 2rem;
    color: #fff;
  }
}
</style>