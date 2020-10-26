<!--  -->
<template>
  <div class="cart" ref="smallimg">
    <div v-if="isBlank">
      <div
        class="goods"
        v-for="(item, index) in cartGoodsInfo"
        :key="item.goods_id"
      >
        <div class="isSelect" @click="changeSelect(item, index)">
          <i class="iconfont icon-xuanzhong-01 select" v-if="item.isSelect"></i>
          <i class="iconfont icon-not_Selected-copy" v-else></i>
        </div>
        <div class="cart-container">
          <img
            :src="'http://192.168.0.113:3000/' + item.goods_img"
            @click="toGoodsDetial(item.goods_id)"
            class="small"
            alt=""
          />
          <div class="goodinfo">
            <p>
              {{ item.goods_name }}
            </p>
            <div class="bottum">
              <span>{{ item.shop_price }}</span>
              <div>
                <a href="javaScript:;" @click="reduce(index)">-</a>
                <input type="text" :value="item.value" @input="input(index)" />
                <a href="javaScript:;" @click="add(index)">+</a>
                <i class="iconfont icon-shoucang"></i>
                <i class="iconfont icon-chahao" @click="remove(index)"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tobuy">
        <div class="isSelect" @click="allSelect">
          <i class="iconfont icon-xuanzhong-01 select" v-if="selectAll"></i>
          <i class="iconfont icon-not_Selected-copy" v-else></i>
          <span>全选</span>
        </div>
        <div class="buy">
          <div class="price">
            合计：<span>{{ total }}</span>
          </div>
          <div class="settlement noone" v-if="!show">去结算</div>
          <div class="settlement" v-else>去结算({{ count }})</div>
        </div>
      </div>
    </div>
    <div v-else class="blank">
      <i class="iconfont icon-gouwuchekong"></i>
      <h2>购物车空空如也,请添加物品！！</h2>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer: Footer,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    isBlank() {
      return this.$store.state.carts.length > 0;
    },
    cartGoodsInfo() {
      return this.$store.state.carts;
    },
    selectAll() {
      return this.$store.state.selectAll;
    },
    total() {
      var allPrice = 0;
      this.$store.state.carts.forEach((item) => {
        if (item.isSelect) {
          allPrice += item.value * item.shop_price;
        }
      });
      return allPrice;
    },
    show() {
      var isShow = this.$store.state.carts.some((item) => {
        return item.isSelect;
      });
      return isShow;
    },
    count() {
      var count = 0;
      this.$store.state.carts.forEach((item) => {
        if (item.isSelect) {
          count += item.value;
        }
      });
      return count;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // repeat() {
    //   let osmallImg = this.$refs.smallimg.querySelectorAll(".small");
    //   osmallImg.forEach((item) => {
    //     item.src = item.src.replace("9527", "3000");
    //   });
    // },
    add(index) {
      this.$store.commit("addValue", index);
    },
    reduce(index) {
      this.$store.commit("reduceValue", index);
    },
    input(index) {
      var oInput = this.$refs.smallimg.querySelectorAll("input");
      var value = oInput[index].value;
      this.$store.commit("changeValue", { index, value });
    },
    remove(index) {
      this.$store.commit("removeGoods", index);
    },
    changeSelect(item, index) {
      item.isSelect = !item.isSelect;
      this.$store.commit("changeSelect", { item, index });
    },
    allSelect() {
      this.$store.commit("allSelect");
    },
    toGoodsDetial(id) {
      this.$router.push("/goodsDetial?goods_id=" + id);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.repeat();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.cart {
  .blank {
    width: 100%;
    text-align: center;
    padding-top: 3rem;
    i {
      font-size: 8rem;
      color: #777;
    }
  }
  .goods {
    width: 100%;
    box-sizing: border-box;
    padding: 2rem 1rem;
    display: flex;
    .isSelect {
      width: 5%;
      line-height: 9.2rem;
      .select {
        color: red;
      }
    }
    .cart-container {
      width: 95%;
      height: 9.2rem;
      border-radius: 2px;
      background-color: #fff;
      box-sizing: border-box;
      padding: 1.3rem 1rem;
      display: flex;
      justify-content: space-between;
      img {
        width: 6.3rem;
      }
      .goodinfo {
        width: 76%;
        p {
          font-size: 1.2rem;
          line-height: 2rem;
          height: 4rem;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          margin-bottom: 1rem;
        }
        .bottum {
          span {
            font-size: 1.6rem;
            color: red;
            &::before {
              content: "￥";
              color: red;
              font-size: 1.2rem;
            }
          }
          display: flex;
          justify-content: space-between;
          div {
            display: flex;
            a {
              display: block;
              width: 1.8rem;
              height: 1.8rem;
              border: 1px solid #eee;
              text-align: center;
            }
            input {
              width: 2rem;
              height: 1.8rem;
              border: 1px solid #eee;
              text-align: center;
            }
            i {
              margin-left: 0.5rem;
            }
          }
        }
      }
    }
  }
  .tobuy {
    width: 100%;
    height: 5rem;
    background-color: #fff;
    position: fixed;
    bottom: 5rem;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .isSelect {
      padding-left: 1rem;
      i {
        margin-right: 0.5rem;
      }
      .select {
        color: red;
      }
    }
    .buy {
      display: flex;
      align-items: center;
      .settlement {
        width: 11rem;
        height: 100%;
        background-color: red;
        line-height: 5rem;
        text-align: center;
        color: white;
        font-size: 1.6rem;
      }
      .noone {
        background-color: #e8e8e8;
        color: rgb(170, 170, 170);
      }
      .price {
        margin-right: 1rem;
        span {
          color: red;
          font-size: 1.6rem;
          &::before {
            content: "￥";
            color: red;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}
</style>