<!-- 首页 -->
<template>
  <div class="home-index">
    <Swipe></Swipe>
    <Quick-nav />
    <Swipe-new />
    <Swipe-list :swipeListDatas="swipeListDatas" />
    <div class="blank"></div>
    <div>首页-首页</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swipe from "@/views/Home/components/Swipe.vue";
import QuickNav from "@/views/Home/components/QuickNav.vue";
import SwipeNew from "@/views/Home/components/SwipeNew.vue";
import SwipeList from "@/views/Home/components/SwipeList.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swipe,
    QuickNav,
    SwipeNew,
    SwipeList,
  },
  data() {
    //这里存放数据
    return {
      swipeListDatas: [
        {
          id: 1,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅1",
        },
        {
          id: 2,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅2",
        },
        {
          id: 3,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅3",
        },
        {
          id: 4,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅4",
        },
        {
          id: 5,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅5",
        },
        {
          id: 6,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅6",
        },
        {
          id: 7,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅7",
        },
        {
          id: 8,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅8",
        },
        {
          id: 9,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅9",
        },
        {
          id: 10,
          imgsrc:
            "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
          title: "电饭锅10",
        },
      ],
    };
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
.blank {
  width: 1rem;
  height: 30rem;
}
</style>