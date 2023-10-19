import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default createStore({
  state: {
    products: [],
    slicedProducts: [],
    cartProducts: [],
    loadedProducts: [],
    loadedProductsQuantity: 0,
    quantityProductsOnPage: 4,
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
})
