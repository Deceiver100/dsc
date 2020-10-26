import { MessageBox } from 'mint-ui';
const mutations = {
    getCategoryDatas(state, data) {
        state.catetoryDatas = data
    },
    getSwipeData(state, data) {
        state.getSwipe = data
    },
    getUserInfo(state, data) {
        state.userInfo = data
    },
    getGoodsList(state, data) {
        state.goodsList = data
    },
    getGoodsDetial(state, data) {
        state.goodsDetial = data
    },
    setCart(state, data) {
        if (data) {
            state.carts.push(data)
        }
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    addValue(state, index) {
        state.carts[index].value++;
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    reduceValue(state, index) {
        state.carts[index].value--;
        if (state.carts[index].value <= 1) {
            state.carts[index].value = 1
            MessageBox({
                title: '提示',
                message: '亲!再点就没他妈的了',
                showCancelButton: true
            });
        }
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    changeValue(state, data) {
        state.carts[data.index].value = data.value;
        if (state.carts[data.index].value < 1) {
            state.carts[data.index].value = 1;
            MessageBox({
                title: '提示',
                message: '还减，没他妈的了',
                showCancelButton: true
            });
        }
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    removeGoods(state, index) {
        MessageBox.confirm('确定删除吗?').then(() => {
            state.carts.splice(index, 1);
            localStorage.setItem("carts", JSON.stringify(state.carts))
        });


    },
    changeSelect(state, data) {
        state.carts[data.index] = data.item;
        var isSelectAll = state.carts.every((item) => {
            return item.isSelect == true
        })
        state.selectAll = isSelectAll
        localStorage.setItem("carts", JSON.stringify(state.carts));
        localStorage.setItem("select", JSON.stringify(isSelectAll))
    },
    allSelect(state) {
        state.selectAll = !state.selectAll
        state.carts.forEach((item) => {
            item.isSelect = state.selectAll
        })
        localStorage.setItem("carts", JSON.stringify(state.carts));
        localStorage.setItem("select", JSON.stringify(state.selectAll))
    },
    SearchList(state, data) {
        state.searchList = data
    },
    History(state, data) {
        if (data) {
            for (var i = 0; i < state.history.length; i++) {
                if (state.history[i] == data) {
                    state.history.splice(i, 1);
                    i--
                }
            }
            state.history.unshift(data)
            localStorage.setItem("history", JSON.stringify(state.history))
        } else {
            state.history = [];
        }
    }
}


export default mutations