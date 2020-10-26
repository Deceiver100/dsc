<!-- 轮播新闻 -->
<template>
  <div class="swipe swipe-news">
    <div class="mint-swipe news">
      <div class="border">
        <img :src="imgTitle" alt="" />
        <ul ref="news" :class="{ trans: flag == true }">
          <li v-for="item in newsListDatas" :key="item.id">{{ item.title }}</li>
        </ul>
      </div>
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
      imgTitle: require("@/assets/177_P_1597978466633.png"),
      flag: false,
      time: "",
      newsListDatas: [
        {
          id: "1",
          title: "新闻001",
        },
        {
          id: "2",
          title: "新闻002",
        },
        {
          id: "3",
          title: "新闻003",
        },
        {
          id: "4",
          title: "新闻004",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    scrollnews() {
      let oUl = this.$refs.news;
      oUl.style.marginTop = "-3.5rem";
      this.flag = !this.flag;
      setTimeout(
        function () {
          this.newsListDatas.push(this.newsListDatas[0]);
          this.newsListDatas.shift();
          oUl.style.marginTop = "0rem";
          this.flag = !this.flag;
        }.bind(this),
        500
      );
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.time = setInterval(() => {
      this.scrollnews();
    }, 2000);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    clearInterval(this.time);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.swipe-news {
  height: 4.5rem;
  margin-top: 0;
  .news {
    background-color: #fff;
    height: 4.5rem;
    border-radius: 0 0 1rem 1rem;
    box-sizing: border-box;
    padding: 0.6rem 0.9rem;
    .border {
      width: 100%;
      height: 100%;
      border-top: 0.2rem solid #eee;
      display: flex;
      img {
        width: 6.2rem;
        height: 2.7rem;
        margin-right: 0.7rem;
      }
      .trans {
        transition: all 0.5s;
      }
      ul {
        overflow: hidden;
        li {
          height: 3.5rem;
          line-height: 3.5rem;
        }
      }
    }
  }
}
</style>