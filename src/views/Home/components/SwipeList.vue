<!--  -->
<template>
  <div class="swipeList">
    <div class="swipelist">
      <div class="list" :style="attr1">
        <div v-for="item in swipeListDatas" :key="item.id" class="swipeInfo">
          <div class="img">
            <img :src="item.imgsrc" alt="" />
          </div>
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar" :style="attr"></div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  props: ["swipeListDatas"],
  components: {},
  data() {
    //这里存放数据
    return {
      allW: 300,
      scrollContenW: 860,
      bgBarw: 100,
      barW: 20,
      starX: 0,
      endX: 0,
      barMoveW: 0,
      contentmoveW: 0,
      content: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {
    attr() {
      return {
        width: `${this.barW + this.barMoveW}px`,
      };
    },
    attr1() {
      return {
        left: `${this.contentmoveW}px`,
      };
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    touchstartFn(e) {
      this.starX = Number(e.touches[0].pageX);
      console.log(e.touches[0].pageX);
    },
    touchmoveFn(e) {
      let moveW = this.starX - Number(e.touches[0].pageX);
      this.contentmoveW = this.content - moveW;
      console.log(moveW);
      this.barMoveW = this.endX + (this.bgBarw / this.scrollContenW) * moveW;
      if (this.barMoveW < 0) {
        this.barMoveW = 0;
      } else if (this.barMoveW > this.bgBarw - this.barW) {
        this.barMoveW = this.bgBarw - this.barW;
      }
      if (this.contentmoveW > 0) {
        this.contentmoveW = 0;
      } else if (this.contentmoveW < this.allW - this.scrollContenW) {
        this.contentmoveW = this.allW - this.scrollContenW;
      }
    },
    touchendFn() {
      this.endX = this.barMoveW;
      this.content = this.contentmoveW;
    },
    getbarW() {
      this.barW = (this.allW / this.scrollContenW) * this.bgBarw;
    },
    bindEven() {
      this.$el.children[0].addEventListener(
        "touchstart",
        this.touchstartFn,
        false
      );
      this.$el.children[0].addEventListener(
        "touchmove",
        this.touchmoveFn,
        false
      );
      this.$el.children[0].addEventListener("touchend", this.touchendFn, false);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.bindEven();
    this.getbarW();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.swipeList {
  position: relative;
  width: 95%;
  height: 18rem;
  margin: 1rem auto;
  background-color: #fff;
  border-radius: 1rem 1rem 0 0;
  overflow: hidden;
  .swipelist {
    .list {
      width: 86rem;
      height: 100%;
      display: flex;
      flex-wrap: nowrap;
      position: absolute;
      top: 0;
      left: 0;
      .swipeInfo {
        text-align: center;
        .img {
          img {
            width: 8.6rem;
            height: 8.6rem;
          }
        }
      }
    }
  }
  .progress {
    width: 10rem;
    height: 0.4rem;
    position: absolute;
    left: 50%;
    bottom: 1rem;
    margin-left: -5rem;
    background-color: gray;
    .progress-bar {
      width: 2rem;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #f00;
    }
  }
}
</style>