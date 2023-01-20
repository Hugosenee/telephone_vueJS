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
  },
  getters: {
  },
  mutations: {
        ajoutContact(state, contact) {
      state.contacts.push(contact)
    },
  },
  actions: {
  },
  modules: {
  }
})
