<!-- 搜索栏 -->
<template>
  <div class="cate-search">
    <div class="icon" onclick="window.history.back()">
      <i class="iconfont icon-zuo"></i>
    </div>
    <div class="search">
      <form action="">
        <input type="text" @focus="toSearch" v-model="keywords" />
        <i class="iconfont icon-search"></i>
      </form>
      <router-link
        class="query"
        :to="'/searchList?keywords=' + keywords"
        tag="div"
        >搜索</router-link
      >
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
    return {
      keywords: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toSearch() {
      if (this.$route.path != "/cateSearch") {
        this.$router.push("/cateSearch");
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
.cate-search {
  width: 100%;
  height: 4.4rem;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  display: flex;
  line-height: 4.4rem;
  .icon {
    width: 15%;
    color: #999;
    text-align: center;
    font-size: 1.6rem;
  }
  .search {
    width: 85%;
    position: relative;
    display: flex;
    align-content: center;
    .query {
      width: 20%;
      text-align: center;
      font-size: 1.4rem;
    }
    form {
      width: 80%;
      input {
        width: 100%;
        height: 2.7rem;
        border: 1px solid #eee;
        border-radius: 2.7rem;
        text-indent: 1.5rem;
      }
      i {
        position: absolute;
        top: 0;
        right: 6.1rem;
        color: #666;
      }
    }
  }
}
</style>