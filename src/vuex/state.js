const state = {
    num: 1,
    catetoryDatas: [],
    getSwipe: [],
    userInfo: localStorage["userInfo"] ? JSON.parse(localStorage["userInfo"]) : {},
    goodsList: [],
    goodsDetial: [],
    carts: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],
    selectAll: localStorage["select"] ? JSON.parse(localStorage["select"]) : false,
    searchList: [],
    history: localStorage["history"] ? JSON.parse(localStorage["history"]) : []
}

export default state