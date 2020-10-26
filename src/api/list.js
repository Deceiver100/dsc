import ajax from "./api"
export const getGoodsList = (params) => ajax("http://192.168.0.113:3000/api/v1/category/goodslist", params)
export const getGoodsDetial = (params) => ajax("http://192.168.0.113:3000/api/v1/category/goodsdetail", params)
export const searchList = (params) => ajax("http://39.101.210.136:3000/api/v1/search", params)