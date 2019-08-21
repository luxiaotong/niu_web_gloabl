import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      cityInfo: null,
      ip: null,
      country: null,
    },

    mutations: {
      // 更新store状态
      SET_CITY: function(state, cityInfo) {
        state.cityInfo = cityInfo
      },
      SET_IP: function(state, ip) {
        state.ip = ip
      },
      SET_COUNTRY: function(state, country) {
        state.country = country
      },
    },
    actions: {
      // 页面渲染前store处理，判断登录过更新store信息
      //nuxtServerInit({ commit }, { req }) {
      //  if (req.session && req.session.userId) {
      //    commit('SET_USER', req.session.userId)
      //  }
      //}
    }
  })

export default store
