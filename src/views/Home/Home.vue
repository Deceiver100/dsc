<!--  -->
<template>
  <div class="home">
    <HomeHeader />
    <div class="lybar">
      <ly-tab
        v-model="selectedId"
        :items="items"
        :options="options"
        @change="changeFn"
      >
      </ly-tab>
      <div class="category">
        <i class="iconfont icon-fenlei1"></i>
        <span>分类</span>
      </div>
    </div>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer.vue";
import HomeHeader from "./components/HomeHeader.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    HomeHeader,
  },
  data() {
    //这里存放数据
    return {
      selectedId: 0,
      items: [
        { label: "首页" },
        { label: "家用电器" },
        { label: "男装女装" },
        { label: "鞋靴箱包" },
        { label: "手机数码" },
        { label: "电脑办公" },
        { label: "家具家纺" },
        { label: "个人化妆" },
      ],
      options: {
        activeColor: "#fff",
      },
      childrenRouter: [
        "/home/index",
        "/home/ele",
        "/home/person",
        "/home/box",
        "/home/phone",
        "/home/computer",
        "/home/house",
        "/home/face",
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changeFn(item, index) {
      this.$router.push(this.childrenRouter[index]);
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
.lybar {
  width: 100%;
  height: 3.7rem;
  background-color: red;
  display: flex;
  position: fixed;
  top: 4.4rem;
  left: 0;
  z-index: 999;
  .ly-tab {
    width: 82%;
    height: 100%;
    .ly-tabbar {
      height: 100%;
      background-color: red;
      border-bottom: none;
      box-shadow: none;
      span {
        font-size: 1.2rem;
        color: white;
      }
    }
  }
  .category {
    line-height: 3.7rem;
    text-align: center;
    width: 18%;
    color: white;
    i {
      font-size: 1.2rem;
      box-shadow: -6px 0 4px -4px rgba(0, 0, 0, 0.4);
      padding-left: 5px;
    }
  }
}
</style>