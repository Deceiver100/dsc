<!-- 商品详情页 -->
<template>
  <div class="goods-swipe">
    <div class="header">
      <i class="iconfont icon-zuo" onclick="window.history.back()"></i>
      <i class="iconfont icon-you"></i>
    </div>
    <div class="goodsdetial">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="https://img14.360buyimg.com/n1/s800x800_jfs/t7552/201/199859419/179578/1aeb7dc6/59902e1dN8274d2d1.jpg"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://img14.360buyimg.com/n1/s800x800_jfs/t7552/201/199859419/179578/1aeb7dc6/59902e1dN8274d2d1.jpg"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://img14.360buyimg.com/n1/s800x800_jfs/t7552/201/199859419/179578/1aeb7dc6/59902e1dN8274d2d1.jpg"
              alt=""
            />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="goods-footer">
      <div class="center">
        <i class="iconfont icon-xinxi"></i>
        <p>客服</p>
      </div>
      <div class="center">
        <i class="iconfont icon-shoucang2"></i>
        <p>收藏</p>
      </div>
      <div class="center" @click="toCart">
        <i class="iconfont icon-gouwuche"></i>
        <p>购物车</p>
        <div :class="{ addNum: flag }" v-if="flag">+1</div>
        <em>{{ count }}</em>
      </div>
      <div class="flex" @click="addGoods(goodsDetial)">加入购物车</div>
      <div class="flex or">立即购买</div>
    </div>
    <div class="goods-container">
      <div class="text">
        <span>{{ goodsDetial.shop_price }}</span>
        <h3>{{ goodsDetial.goods_name }}</h3>
      </div>
      <div v-html="goodsDetial.goods_desc" ref="img"></div>
    </div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      flag: false,
      time: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    goodsDetial() {
      return this.$store.state.goodsDetial;
    },
    count() {
      var count = 0;
      this.$store.state.carts.forEach((item) => {
        count += item.value;
      });
      return count;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toCart() {
      this.$router.push("/cart");
    },
    repeat() {
      let oImg = this.$refs.img.querySelectorAll("img");
      oImg.forEach((item) => {
        let index = item.src.indexOf("images")
        item.src =
          "http://192.168.0.113:3000/" +
          item.src.substring(index);
      });
    },
    addGoods(data) {
      this.flag = true;
      this.time = setTimeout(() => {
        this.flag = false;
      }, 1000);
      var cartsDetial = this.$store.state.carts.find((item) => {
        if (data.goods_id == item.goods_id) {
          item.value++;
        }
        return data.goods_id == item.goods_id;
      });
      if (!cartsDetial) {
        var cartData = {
          goods_id: data.goods_id,
          goods_name: data.goods_name,
          shop_price: data.shop_price,
          value: 1,
          goods_img: data.goods_img,
          isSelect: false,
        };
      }
      this.$store.commit("setCart", cartData);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$store.dispatch("getGoodsDetial", {
      goods_id: this.$route.query.goods_id,
    });
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: true,
    });
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {
    this.repeat();
  }, //生命周期 - 更新之后
};
</script>
<style lang="less">
.goods-swipe {
  .header {
    width: 100%;
    height: 3.6rem;
    box-sizing: border-box;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    opacity: 0.5;
    z-index: 999999;
    i {
      background-color: #eee;
      width: 3rem;
      height: 3rem;
      text-align: center;
      line-height: 3rem;
      border-radius: 50%;
      opacity: 0.5;
    }
  }
  .goodsdetial {
    img {
      width: 100%;
      height: 37.5rem;
    }
  }
}
.goods-footer {
  width: 100%;
  height: 4.9rem;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #eee;
  background-color: #fff;
  display: flex;
  .center {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #efefef;
    font-size: 1.2rem;
    position: relative;
    .addNum {
      position: absolute;
      top: 1.5rem;
      color: red;
      font-size: 1.8rem;
      font-family: Arial, Helvetica, sans-serif;
      animation: moveup 1s linear;
    }
    @keyframes moveup {
      0% {
        opacity: 0;
        top: 1.5rem;
      }
      50% {
        opacity: 1;
        top: 0;
      }
      100% {
        opacity: 1;
        top: -1.5rem;
      }
    }
    p {
      color: #666;
    }
    em {
      position: absolute;
      right: 0.9rem;
      top: 0.2rem;
      min-width: 1.5rem;
      height: 1.5rem;
      background-color: red;
      font-style: normal;
      border-radius: 50%;
      color: #fff;
      text-align: center;
      line-height: 1.5rem;
    }
  }
  .flex {
    flex: 2;
    line-height: 4.9rem;
    text-align: center;
    background-color: red;
    color: white;
    font-size: 1.6rem;
  }
  .or {
    background-color: #ff976a;
  }
}
.goods-container {
  .text {
    box-sizing: border-box;
    padding: 1rem;
    background-color: #fff;
    span {
      font-size: 1.8rem;
      color: red;
      &::before {
        content: "￥";
        font-size: 1.2rem;
      }
    }
  }
  div {
    width: 100%;
    p {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>