<!-- 家用电器 -->
<template>
  <div class="ele">
    <div class="right">
      <div class="info" v-if="flag == true">
        <div class="img">
          <img :src="imgurl" />
        </div>
        <div v-for="item in getInfo" :key="item.cat_id">
          <p>
            -<span>{{ item.cat_name }}</span
            >-
          </p>
          <ul>
            <li v-for="list in item.child" :key="list.cat_id">
              <div class="goods">
                <router-link
                  :to="'/listdetail?cat_id=' + list.cat_id"
                  tag="div"
                >
                  <img
                    src="https://x.dscmall.cn/storage/images/201809/thumb_img/724_thumb_G_1577322409904.jpg"
                  />
                </router-link>
                <p>{{ list.cat_name }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading" v-else>
        <img :src="url" style="width: 100%" alt="" />
      </div>

      <div class="blank"></div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      getInfo: [],
      img: [],
      imgurl: "",
      flag: false,
      url:
        "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3681478079,2138136230&fm=26&gp=0.jpg",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route(to) {
      let cid = to.params.cid;
      this.toRouter(cid);
    },
  },
  //方法集合
  methods: {
    toRouter(cid) {
      Axios.get(
        "http://192.168.0.113:3000/api/v1/category/categorylist/" + cid
      ).then((res) => {
        if (res.status == 200) {
          this.flag = true;
          this.getInfo = res.data.data;
          this.img = this.$store.state.catetoryDatas.filter((item) => {
            return item.category_id == cid;
          });
          this.imgurl = this.img[0].menu_img;
        } else {
          this.flag = false;
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
    if (this.$route.params.cid) {
      this.toRouter(this.$route.params.cid);
    } else {
      this.toRouter("858");
    }
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.category {
  .right {
    width: 75%;
    height: 100%;
    position: fixed;
    top: 4.5rem;
    right: 0;
    background-color: #fff;
    overflow: auto;
    .loading {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
      }
    }
    .blank {
      width: 1rem;
      height: 8rem;
    }
    .info {
      .img {
        box-sizing: border-box;
        padding: 1rem;
        img {
          width: 100%;
        }
      }
      p {
        text-align: center;
        margin-bottom: 1rem;
      }
      ul {
        width: 100%;
        box-sizing: border-box;
        padding: 0 1rem;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 33.33%;
          margin-bottom: 1.8rem;
          .goods {
            div {
              width: 100%;
              text-align: center;
              img {
                width: 4.7rem;
              }
            }
            p {
              color: #777;
            }
          }
        }
      }
    }
  }
}
</style>