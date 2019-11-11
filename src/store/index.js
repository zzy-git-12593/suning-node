import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 动画 页面跳转
    fade: '',
    popularList: [],
    lists: [],
    tabMsg: '热门推荐',
    typeInput: '',
    typeInputList: [],
    commodityInfoList: null,
    shoppingCarList: [],
    //购买全选按钮
    isBuyCheck: false,
    // 删除按钮
    isDelBtn: false,
    // 删除全选按钮
    isDelCheck: false
  },
  mutations: {

    changeTransition(state) {
      state.fade = 'search'
    },
    searchChangeTransition(state) {
      state.fade = 'home'
    },
    // 生命周期之前获取购物车数据
    getLocaStorage(state) {
      let addList = JSON.parse(localStorage.getItem('shoppingCarList'))
      if (addList) {
        console.log("beforemount生命周期取到了locstorage数据")
        state.shoppingCarList = addList
      } else {
        console.log("beforemount生命周期没有取到了locstorage数据")
      }

      // 获取本地数据
      if (localStorage.isDelCheck == "true") {
        state.isDelCheck = true
      } else if (localStorage.isDelCheck == "false") {
        state.isDelCheck = false
      }

      if (localStorage.isBuyCheck == "true") {
        state.isBuyCheck = true
      } else if (localStorage.isBuyCheck == "false") {
        state.isBuyCheck = false
      }

      if (localStorage.isDelBtn == "true") {
        state.isDelBtn = true
      } else if (localStorage.isDelBtn == "false") {
        state.isDelBtn = false
      }

    },
    // 分类数据
    getpopularListMutations(state, data) {
      state.popularList = data
      state.lists = state.popularList[0].list
    },
    getListsMutations(state, data) {
      state.tabMsg = data
      for (let i = 0; i < state.popularList.length; i++) {
        if (state.popularList[i].tabName == data) {
          state.lists = state.popularList[i].list
        }
      }
    },
    // 修改商品详情数据
    getCommodityInfoMutations(state, data) {
      state.commodityInfoList = data
    },
    // 在商品详情页添加购物车
    addShoppingCarMutations(state, obj) {

      // let addList = JSON.parse(localStorage.getItem('shoppingCarList'))
      // 初始化判断本地是否有
      if (state.shoppingCarList) {
        // state.shoppingCarList = addList
        // console.log('有数据', state.shoppingCarList)
        // 判断存在则将数量增加,并且价格也发生改变
        state.shoppingCarList.forEach(item => {
          if (item.id == obj.id) {
            item.count += obj.count
            console.log('-------相同，添加数量----------')
            console.log(item)
          }
        })
        // every方法判断不含有，则添加新商品
        let isFind = state.shoppingCarList.every(item => {
          return item.id != obj.id
        })
        if (isFind) {
          console.log('-------没有相同，添加商品----------')
          state.shoppingCarList.push({
            id: obj.id,
            cmmdtyTitle: obj.cmmdtyTitle,
            imgUrl: obj.imgUrl,
            price: obj.price,
            color: obj.color,
            count: obj.count,
            toalPrices: 0,
            isDelChosed: false,
            isChosed: false
          })
          state.isBuyCheck = false
        }
        // 本地不存在则添加商品
      }
      localStorage.shoppingCarList = JSON.stringify(state.shoppingCarList)
    },

    // 购物车改变数量，改变价格 同步到本地
    addShoppingCarCommdlityCount(state, index) {
      state.shoppingCarList[index].count++
      // 当被选中时候加减计算价格
      if (state.shoppingCarList[index].isChosed) {
        state.shoppingCarList[index].toalPrices = state.shoppingCarList[index].count * state.shoppingCarList[index].price
      }
      localStorage.shoppingCarList = JSON.stringify(state.shoppingCarList)
    },

    minusShoppingCarCommdlityCount(state, index) {
      if (state.shoppingCarList[index].count > 1) {
        state.shoppingCarList[index].count--
        if (state.shoppingCarList[index].isChosed) {
          state.shoppingCarList[index].toalPrices = state.shoppingCarList[index].count * state.shoppingCarList[index].price
        }
      } else {
        state.shoppingCarList.splice(index, 1)
      }
      localStorage.shoppingCarList = JSON.stringify(state.shoppingCarList)
    },
    // 购物车商品选中按钮
    commdlityChosedBtn(state, index) {
      state.shoppingCarList[index].isChosed = !state.shoppingCarList[index].isChosed
      // 判断购买全选按钮与单个按钮的联动
      let isAllByChosed = state.shoppingCarList.every(item => item.isChosed)
      if (isAllByChosed) {
        state.isBuyCheck = true
      } else {
        state.isBuyCheck = false
      }
      // 由于在第一次添加时未计算，所以当被选中了，计算总价
      if (state.shoppingCarList[index].isChosed) {
        state.shoppingCarList[index].toalPrices = state.shoppingCarList[index].count * state.shoppingCarList[index].price
      }
      localStorage.isBuyCheck = state.isBuyCheck
      localStorage.shoppingCarList = JSON.stringify(state.shoppingCarList)
    },

    // 购物车全选按钮
    allCommdlityChosed(state) {
      if (state.shoppingCarList.length > 0) {
        state.isBuyCheck = !state.isBuyCheck
        if (state.isBuyCheck) {
          state.shoppingCarList.forEach(item => {
            return item.isChosed = true
          })
        } else {
          state.shoppingCarList.forEach(item => {
            return item.isChosed = false
          })
        }
        state.shoppingCarList.forEach(item => {
          return item.toalPrices = item.count * item.price
        })
      }

      localStorage.isBuyCheck = state.isBuyCheck
      localStorage.shoppingCarList = JSON.stringify(state.shoppingCarList)
    },

    // 购物车删除商品按钮
    shoppingCarDelCommdlity(state) {
      if (state.isDelCheck) {
        state.shoppingCarList = []
        localStorage.shoppingCarList = []
        state.isBuyCheck = false
        state.isDelBtn = false
      } else {
        state.shoppingCarList.forEach((item, index, array) => {
          if (item.isDelChosed) {
            array.splice(index, 1)
            state.isDelBtn = false
          }
        })
      }
      state.isDelCheck = false
      localStorage.isDelCheck = state.isDelCheck
      localStorage.isBuyCheck = state.isBuyCheck
      localStorage.shoppingCarList = JSON.stringify(state.shoppingCarList)
    },
    // 购物车商品的删除选中按钮
    delCommdlityChosedBtn(state, index) {
      state.shoppingCarList[index].isDelChosed = !state.shoppingCarList[index].isDelChosed
      // 判断删除按钮在全部未选中时删除按钮为false,有一个选中，则true
      let isAllUnchosed = state.shoppingCarList.every(item => item.isDelChosed == false)
      if (isAllUnchosed) {
        state.isDelBtn = false
      } else {
        state.isDelBtn = true
      }
      // 判断当单个选中按钮与全选按钮的联动
      let isAllDelChosed = state.shoppingCarList.every(item => item.isDelChosed)
      if (isAllDelChosed) {
        state.isDelCheck = true
      } else {
        state.isDelCheck = false
      }

      localStorage.isDelCheck = state.isDelCheck
      localStorage.isDelBtn = state.isDelBtn
      localStorage.shoppingCarList = JSON.stringify(state.shoppingCarList)
    },
    // 删除商品全选按钮
    allCommdlityDelChosed(state) {
      if (state.shoppingCarList.length > 0) {
        state.isDelCheck = !state.isDelCheck
        if (state.isDelCheck) {
          state.shoppingCarList.forEach(item => {
            return item.isDelChosed = true, state.isDelBtn = true
          })
        } else {
          state.shoppingCarList.forEach(item => {
            return item.isDelChosed = false, state.isDelBtn = false
          })
        }
      }
      localStorage.isDelCheck = state.isDelCheck
    },

    // 购物车推荐商品加入购物车按钮
    ShoppingCarAddCommltyToCar(state, obj) {
      if (state.shoppingCarList) {
        // 判断存在则将数量增加,并且价格也发生改变
        state.shoppingCarList.forEach(item => {
          if (item.id == obj.id) {
            item.count++
            item.toalPrices += item.price
            console.log('-------相同，添加数量----------')
          }
        })

        // every方法判断不含有，则添加新商品
        let isFind = state.shoppingCarList.every(item => {
          console.log(item.id != obj.id)
          return item.id != obj.id
        })
        if (isFind) {
          console.log('-------没有相同，添加商品----------')
          state.shoppingCarList.push({
            id: obj.id,
            cmmdtyTitle: obj.cmmdtyTitle,
            imgUrl: obj.imgUrl,
            price: obj.price,
            color: obj.color,
            count: 1,
            toalPrices: 0,
            isDelChosed: false,
            isChosed: false
          })
          state.isBuyCheck = false
        }
        // 本地同步数据
        localStorage.shoppingCarList = JSON.stringify(state.shoppingCarList)
      }
    }
  },
  actions: {
    getpopularListActions(store) {
      axios.get("/json/type.json").then(data => {
        store.commit('getpopularListMutations', data.data)
      });
    },
    // 提交请求的商品详情数据
    getCommodityInfoActions(store, commodityID) {

      axios.get(`http://localhost:3000/detailsList/${commodityID}`)
        .then(res => store.commit('getCommodityInfoMutations', res.data)).catch(() => console.log('error'))
    },
  },
  //删选商品详情轮播数组,将图片分为6个组 渲染到页面
  getters: {
    filterSubGoodsSwiperList(state) {
      let result = []
      let subGoods = state.commodityInfoList.subGoods.sku.concat()

      for (let i = 0; i < subGoods.length; i + 6) {
        result.push(subGoods.splice(i, i + 6))
      }
      console.log(subGoods)
      return result
    },
    filterSubGoodSwiperList(state) {
      let results = []
      let subGood = state.commodityInfoList.subGood.sku.concat()
      console.log(subGood)
      for (let i = 0; i < subGood.length; i + 6) {
        results.push(subGood.splice(i, i + 6))
      }
      console.log(results)
      return results
    },
    computedPrice(state) {
      let result = 0
      for (let i = 0; i < state.shoppingCarList.length; i++) {
        if (state.shoppingCarList[i].isChosed || state.isBuyCheck) {
          result += state.shoppingCarList[i].toalPrices
        }
        // 不可以再跟else reuslt=0,否则result等于被重新赋值，return后的值被显示在页面
      }
      return result
    }
  }
})