<!-- 路由列表 -->
<template>
  <div class="categoryList">
    <div class="aside">
      <ul>
        <li v-for="item in this.$store.state.catetoryDatas" :key="item.menu_id">
          <router-link :to="'/category/' + item.category_id" tag="span">{{
            item.menu_name
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";

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
    getcategoryList() {
      Axios.get("http://192.168.0.113:3000/api/v1/category").then((res) => {
        if (res.status == 200) {
          this.$store.dispatch("getCategoryDatas", res.data.data);
        }
      });
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getcategoryList();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.categoryList {
  width: 25%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 4.5rem;
  left: 0;
  border-right: 1px solid #eee;
  z-index: 999;
  .aside {
    ul {
      li {
        width: 100%;
        height: 3.4rem;
        display: flex;
        align-items: center;
        text-align: center;
        span {
          width: 100%;
          height: 1.8rem;
          color: #999;
        }
        .router-link-active {
          color: red;
          border-left: 2px solid #f00;
        }
      }
    }
  }
}
</style>