<!-- 分类搜索 -->
<template>
  <div class="category-search">
    <Header />
    <div class="content">
      <div>
        <div class="container">
          <div class="title">
            <span>最近搜索</span>
            <i class="iconfont icon-chahao" @click="remove"></i>
          </div>
          <div class="list">
            <ul v-if="isshow">
              <router-link
                v-for="(item, index) in history"
                :key="index"
                :to="'/searchList?keywords=' + item"
                tag="li"
              >
                {{ item }}
              </router-link>
            </ul>
            <ul v-else>
              <li>暂无</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div class="container">
          <div class="title">
            <span>热搜</span>
          </div>
          <div class="list">
            <ul>
              <li>周大福</li>
              <li>周大福</li>
              <li>周大福</li>
              <li>周大福</li>
              <li>周大福</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "./categoryheader.vue";
import Footer from "@/components/Footer.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header,
    Footer,
  },
  data() {
    //这里存放数据
    return {};
  },
  computed: {
    history() {
      return this.$store.state.history;
    },
    isshow() {
      return this.$store.state.history.length > 0;
    },
  },
  methods: {
    remove() {
      localStorage.removeItem("history");
      this.$store.commit("History");
    },
  },
};
</script>
<style lang="less">
.category-search {
  .content {
    width: 100%;
    background-color: #fff;
    margin-top: 4.5rem;
    overflow: hidden;
    box-sizing: border-box;
    padding: 1rem;
    .container {
      margin-top: 1rem;
      font-size: 1.4rem;
      color: #555;
      .title {
        display: flex;
        justify-content: space-between;
      }
      .list {
        margin-top: 1rem;
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            padding: 0rem 1rem;
            background-color: #f0f2f5;
            margin-right: 1.5rem;
            margin-top: 0.5rem;
            border-radius: 4px;
          }
        }
      }
    }
  }
}
</style>