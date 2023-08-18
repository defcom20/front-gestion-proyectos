import { defineStore } from 'pinia'

export const useProyectManagement = defineStore('proyectManagement', {
  state: () => ({
    data: ""
  }),
  getters: {
    //isAuthenticated: state => state.user !== null && state.token !== null
  },
  actions: {
    // setUser(payload) {
    //   this.user = payload.data.user
    //   this.token = payload.data.accessToken
    // },
    // logout({ state }) {
    //   state.user = null
    //   state.token = null
    // }
  }
})
