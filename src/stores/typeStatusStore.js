import { defineStore } from 'pinia'

export const useTypeStatus = defineStore('typeStatus', {
  state: () => ({
    ListTypeStatus: []
  }),
  getters: {
    //isAuthenticated: state => state.user !== null && state.token !== null
  },
  actions: {
    setTypeStatus(payload) {
      this.ListTypeStatus = payload
    }
  }
})
