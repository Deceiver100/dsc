import { getSwipes } from "@/api/index.js";
import { getGoodsList, getGoodsDetial, searchList } from "@/api/list.js"
const actions = {
    getCategoryDatas(context, data) {
        context.commit("getCategoryDatas", data)
    },
    async getSwipeData(context) {
        let result = await getSwipes
        context.commit("getSwipeData", result.data)
    },
    getUserInfo(context, data) {
        localStorage.setItem("userInfo", JSON.stringify(data))
        context.commit("getUserInfo", data)
    },
    async getGoodsList(context, data) {
        let result = await getGoodsList(data);
        context.commit("getGoodsList", result.data)
    },
    async getGoodsDetial(context, data) {
        let result = await getGoodsDetial(data);
        context.commit("getGoodsDetial", result.data[0])
    },
    async SearchList(context, data) {
        let result = await searchList(data);
        context.commit("SearchList", result.data)
    }
}
export default actions