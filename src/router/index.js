import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from "../views/Home/Home.vue"
import Cart from "../views/Cart/Cart.vue"
import Category from "../views/Category/Category.vue"
import Mine from "../views/Mine/Mine.vue"
import Search from "../views/Search/Search.vue"
import Login from "@/views/Login/Login.vue"
// 首页子组件
import Index from "../views/Home/children/Index";
import Ele from "../views/Home/children/Ele";
import Person from "../views/Home/children/Person";
import Box from "../views/Home/children/Box";
import Phone from "../views/Home/children/Phone";
import Computer from "../views/Home/children/Computer";
import House from "../views/Home/children/House";
import Face from "../views/Home/children/Face";
// 分类子组件
import categorySearch from "../views/Category/components/categorySearch.vue";
//列表详情页
import listDetail from "../views/Category/components/listDetail.vue"
//商品详情页
import goodsDetial from "../views/goodsDetial/goodsDetial.vue"
// 搜素页面
import SearchList from "../views/SearchList/SearchList.vue"
let routes = [{
    path: "/searchList",
    component: SearchList
}, {
    path: "/goodsDetial",
    component: goodsDetial
}, {
    path: "/listdetail",
    component: listDetail
}, {
    path: "/login",
    component: Login
}, {
    path: "/",
    redirect: "/home"
}, {
    path: "/home",
    name: "home",
    component: Home,
    children: [{
        path: "index",
        component: Index
    }, {
        path: "ele",
        component: Ele
    }, {
        path: "person",
        component: Person
    }, {
        path: "box",
        component: Box
    }, {
        path: "phone",
        component: Phone
    }, {
        path: "computer",
        component: Computer
    }, {
        path: "house",
        component: House
    }, {
        path: "face",
        component: Face
    }, {
        path: "/home",
        redirect: "/home/index"
    }]
}, {
    path: "/cart",
    name: "cart",
    component: Cart
}, {
    path: "/category/:cid",
    name: "category",
    component: Category
}, {
    path: "/category",
    redirect: "/category/858"
}, {
    path: "/cateSearch",
    name: "cateSearch",
    component: categorySearch,
}, {
    path: "/mine",
    name: "mine",
    component: Mine
}, {
    path: "/search",
    name: "search",
    component: Search
}]
const router = new VueRouter({
    routes
})

export default router