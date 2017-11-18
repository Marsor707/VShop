import Axios from 'axios'

const state = {
  orderList: [],
  params: {}
}

const getters = {
  getOrderList: state => state.orderList
}

const actions = {
  fetchOrderList({commit, state}) {
    Axios.post('/api/getOrderList', state.params)
      .then((res) => {
        commit('updateOrderList', res.data.list)
      })
      .catch((err) => {

      })
  }
}

const mutations = {
  updateOrderList(state, payload) {
    state.orderList = payload
  },
  updateParams(state, {key, val}) {
    state.params[key] = val
    console.log(key, val)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
