import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        name: "Sanji",
        number: "0606060606"
      },
      {
        name: "Brook",
        number: "0707070707"
      },
      {
        name: "Jinbe",
        number: "0808080808"
      }
    ],
    calls : []
  },
  getters: {
  },
  mutations: {
      appel(state, contact) {
      state.calls.push(contact)
    },
  },
  actions: {
  },
  modules: {
  }
})
