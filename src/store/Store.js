import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isValid: false,
    score: 0
  },
  getters: {
    isValid: state => state.isValid,
    score: state => state.score
  },
  mutations: {
    validResponse (state) {
      state.isValid = true
    },
    invalidResponse (state) {
      state.isValid = false
    },
    incrementScore (state) {
      state.score++
    }
  },
  actions: {

  },
  strict: true
})

/*  export default class Store {
  constructor () {
    this.state = {
      response: false
    }
  }

  validResponse = () => {
    this.state.response = true
  }

  invalidResponse = () => {
    this.state.response = false
  }
}  */
