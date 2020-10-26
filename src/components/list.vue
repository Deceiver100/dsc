<!-- 一行两列列表 -->
<template>
  <div class="list-container">
    <ul>
      <li v-for="item in lists" :key="item.goods_id">
        <router-link
          class="cateinfo"
          :to="'/goodsDetial?goods_id=' + item.goods_id"
          tag="div"
        >
          <img :src="'http://192.168.0.113:3000/' + item.goods_img" />
          <div>
            <h3>
              {{ item.goods_name }}
            </h3>
            <p>{{ item.shop_price }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: ["lists"],
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
.list-container {
  width: 100%;
  ul {
    width: 100%;
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      box-sizing: border-box;
      padding: 0 0.5rem 0.5rem 0.5rem;
      .cateinfo {
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 4px;
        img {
          width: 100%;
        }
        div {
          padding: 0.5rem 1rem;
          h3 {
            line-height: 2rem;
            height: 4rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            -webkit-box-orient: vertical;
          }
          p {
            text-align: center;
            color: red;
            font-size: 1.6rem;
            &::before {
              content: "￥";
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }
}
</style>